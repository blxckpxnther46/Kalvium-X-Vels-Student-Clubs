// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbookSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome & Overview',
    },
    {
      type: 'category',
      label: '01: INTRODUCTION',
      link: { type: 'doc', id: 'introduction/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'introduction/index', label: 'Welcome & Ecosystem Overview' },
        'introduction/growth-pillars',
      ],
    },
    {
      type: 'category',
      label: '02: CLUB ECOSYSTEM',
      link: { type: 'doc', id: 'club-ecosystem/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'club-ecosystem/index', label: 'Framework & Club Autonomy' },
        'club-ecosystem/2d-3d-club',
        'club-ecosystem/social-media-club',
        'club-ecosystem/abstract-strategies-club',
        'club-ecosystem/debate-public-speaking-club',
        'club-ecosystem/inter-club-collaboration',
      ],
    },
    {
      type: 'category',
      label: '03: OPERATIONS',
      link: { type: 'doc', id: 'operations/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'operations/index', label: 'Student Club Operations Team' },
        'operations/campus-coordination',
      ],
    },
    {
      type: 'category',
      label: '04: CLUB LEADERSHIP',
      link: { type: 'doc', id: 'club-leadership/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'club-leadership/index', label: 'Leadership Structure & Roles' },
        'club-leadership/deliverables',
        'club-leadership/reporting',
      ],
    },
    {
      type: 'category',
      label: '05: MEMBERSHIP & LIFECYCLE',
      link: { type: 'doc', id: 'membership/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'membership/index', label: 'Joining & Member Expectations' },
        'membership/club-cycles',
        'membership/club-switching',
      ],
    },
    {
      type: 'category',
      label: '06: MENTORSHIP',
      link: { type: 'doc', id: 'mentorship/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'mentorship/index', label: 'Faculty Mentorship & Support Model' },
      ],
    },
    {
      type: 'category',
      label: '07: SCHEDULING & ACTIVITIES',
      link: { type: 'doc', id: 'scheduling-activities/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'scheduling-activities/index', label: 'Growth Hours & Club Activities' },
        'scheduling-activities/showcase-day',
      ],
    },
    {
      type: 'category',
      label: '08: GUIDELINES & GOVERNANCE',
      link: { type: 'doc', id: 'guidelines/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'guidelines/index', label: 'Code of Conduct & Governance Guidelines' },
      ],
    },
    {
      type: 'category',
      label: '09: DOCUMENTATION & ARTIFACTS',
      link: { type: 'doc', id: 'documentation/index' },
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'documentation/index', label: 'Project Documentation & Archives' },
      ],
    },
  ],
};

module.exports = sidebars;
