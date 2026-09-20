// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbookSidebar: [
    'intro',
    {
      type: 'category',
      label: '01: Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        'introduction/index',
        'introduction/growth-pillars',
      ],
    },
    {
      type: 'category',
      label: '02: Club Ecosystem',
      collapsible: true,
      collapsed: false,
      items: [
        'club-ecosystem/index',
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
      collapsible: true,
      collapsed: false,
      items: [
        'operations/index',
        'operations/campus-coordination',
      ],
    },
    {
      type: 'category',
      label: '04: Club Leadership',
      collapsible: true,
      collapsed: false,
      items: [
        'club-leadership/index',
        'club-leadership/deliverables',
        'club-leadership/reporting',
      ],
    },
    {
      type: 'category',
      label: '05: Membership & Lifecycle',
      collapsible: true,
      collapsed: false,
      items: [
        'membership/index',
        'membership/club-cycles',
        'membership/club-switching',
      ],
    },
    {
      type: 'category',
      label: '06: Mentorship',
      collapsible: true,
      collapsed: false,
      items: [
        'mentorship/index',
      ],
    },
    {
      type: 'category',
      label: '07: Scheduling & Activities',
      collapsible: true,
      collapsed: false,
      items: [
        'scheduling-activities/index',
        'scheduling-activities/showcase-day',
      ],
    },
    {
      type: 'category',
      label: '08: Guidelines & Governance',
      collapsible: true,
      collapsed: false,
      items: [
        'guidelines/index',
      ],
    },
    {
      type: 'category',
      label: '09: Documentation & Artifacts',
      collapsible: true,
      collapsed: false,
      items: [
        'documentation/index',
      ],
    },
  ],
};

module.exports = sidebars;
