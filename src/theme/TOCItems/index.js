/**
 * Swizzled TOCItems component with improved active heading detection for short pages
 */

import React, { useEffect, useRef, useMemo } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useFilteredAndTreeifiedTOC } from '@docusaurus/theme-common/internal';
import TOCItemTree from '@theme/TOCItems/Tree';

function useCustomTOCHighlight(config) {
  const lastActiveLinkRef = useRef(undefined);
  const { navbar } = useThemeConfig();
  const hideOnScroll = navbar?.hideOnScroll;

  useEffect(() => {
    if (!config) return;

    const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;

    function updateActiveLink() {
      // linkClassName might be a composite string like "table-of-contents__link toc-highlight"
      const linkSelector = linkClassName
        .split(' ')
        .filter(Boolean)
        .map((c) => `.${c}`)
        .join('');

      const links = Array.from(document.querySelectorAll(linkSelector));
      if (!links.length) return;

      const selectors = [];
      for (let i = minHeadingLevel; i <= maxHeadingLevel; i += 1) {
        selectors.push(`h${i}[id]`, `h${i}.anchor`);
      }

      const anchors = Array.from(document.querySelectorAll(selectors.join(',')));
      if (!anchors.length) return;

      // Deduplicate anchors by ID
      const anchorMap = new Map();
      anchors.forEach((anchor) => {
        const id = anchor.id || anchor.parentElement?.id;
        if (id && !anchorMap.has(id)) {
          anchorMap.set(id, anchor);
        }
      });

      // Map links to their corresponding anchor element
      const linkAnchorPairs = [];
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href || !href.includes('#')) return;
        const id = decodeURIComponent(href.substring(href.indexOf('#') + 1));
        const anchor = anchorMap.get(id);
        if (anchor) {
          linkAnchorPairs.push({ link, anchor, id });
        }
      });

      if (!linkAnchorPairs.length) return;

      const navbarEl = document.querySelector('.navbar');
      const navbarHeight = navbarEl ? navbarEl.clientHeight : 74;
      const topOffset = hideOnScroll ? 15 : navbarHeight + 20;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      // Detect if user has scrolled to (or near) the bottom of the document
      const isAtBottom = scrollTop + windowHeight >= scrollHeight - 35;

      let activePair = null;

      if (isAtBottom) {
        // On short pages (or when scrolled to bottom), lower headings cannot reach topOffset.
        // Pick the last heading that is visible inside the viewport.
        const visiblePairs = linkAnchorPairs.filter((pair) => {
          const rect = pair.anchor.getBoundingClientRect();
          return rect.top < windowHeight - 20;
        });
        activePair = visiblePairs[visiblePairs.length - 1] || linkAnchorPairs[linkAnchorPairs.length - 1];
      } else {
        // Normal scrolling: find all headings that have reached or passed topOffset
        const passedPairs = linkAnchorPairs.filter((pair) => {
          const rect = pair.anchor.getBoundingClientRect();
          return rect.top <= topOffset;
        });

        if (passedPairs.length > 0) {
          activePair = passedPairs[passedPairs.length - 1];
        } else {
          // If no heading has passed topOffset yet (top of page), default to the first heading
          activePair = linkAnchorPairs[0];
        }
      }

      // Apply active class name to the current active TOC link
      linkAnchorPairs.forEach(({ link }) => {
        if (activePair && link === activePair.link) {
          if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
            lastActiveLinkRef.current.classList.remove(linkActiveClassName);
          }
          link.classList.add(linkActiveClassName);
          lastActiveLinkRef.current = link;
        } else {
          link.classList.remove(linkActiveClassName);
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink, { passive: true });

    updateActiveLink();
    const timer1 = setTimeout(updateActiveLink, 100);
    const timer2 = setTimeout(updateActiveLink, 300);

    return () => {
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [config, hideOnScroll]);
}

export default function TOCItems({
  toc,
  className = 'table-of-contents table-of-contents__left-border',
  linkClassName = 'table-of-contents__link',
  linkActiveClassName = 'table-of-contents__link--active',
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = useThemeConfig();

  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  const tocHighlightConfig = useMemo(() => {
    return {
      linkClassName: linkClassName || 'table-of-contents__link',
      linkActiveClassName: linkActiveClassName || 'table-of-contents__link--active',
      minHeadingLevel,
      maxHeadingLevel,
    };
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);

  useCustomTOCHighlight(tocHighlightConfig);

  return (
    <TOCItemTree
      toc={tocTree}
      className={className}
      linkClassName={linkClassName}
      {...props}
    />
  );
}
