// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbookSidebar: [
    'intro',
    {
      type: 'category',
      label: '01: Introduction',
      link: { type: 'doc', id: 'introduction/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'introduction/growth-pillars',
      ],
    },
    {
      type: 'category',
      label: '02: Club Ecosystem',
      link: { type: 'doc', id: 'club-ecosystem/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'club-ecosystem/2d-3d-club',
        'club-ecosystem/social-media-club',
        'club-ecosystem/abstract-strategies-club',
        'club-ecosystem/debate-public-speaking-club',
        'club-ecosystem/inter-club-collaboration',
      ],
    },
    {
      type: 'category',
      label: '03: Operations',
      link: { type: 'doc', id: 'operations/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'operations/campus-coordination',
      ],
    },
    {
      type: 'category',
      label: '04: Club Leadership',
      link: { type: 'doc', id: 'club-leadership/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'club-leadership/deliverables',
        'club-leadership/reporting',
      ],
    },
    {
      type: 'category',
      label: '05: Membership & Lifecycle',
      link: { type: 'doc', id: 'membership/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'membership/club-cycles',
        'membership/club-switching',
      ],
    },
    {
      type: 'category',
      label: '06: Mentorship',
      link: { type: 'doc', id: 'mentorship/index' },
      collapsible: true,
      collapsed: false,
      items: [],
    },
    {
      type: 'category',
      label: '07: Scheduling & Activities',
      link: { type: 'doc', id: 'scheduling-activities/index' },
      collapsible: true,
      collapsed: false,
      items: [
        'scheduling-activities/showcase-day',
      ],
    },
    {
      type: 'category',
      label: '08: Guidelines & Governance',
      link: { type: 'doc', id: 'guidelines/index' },
      collapsible: true,
      collapsed: false,
      items: [],
    },
    {
      type: 'category',
      label: '09: Documentation & Artifacts',
      link: { type: 'doc', id: 'documentation/index' },
      collapsible: true,
      collapsed: false,
      items: [],
    },
  ],
};

module.exports = sidebars;
