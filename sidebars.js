// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbookSidebar: [
    {
      type: 'category',
      label: '01: INTRODUCTION',
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
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'mentorship/index', label: 'Faculty Mentorship & Support Model' },
      ],
    },
    {
      type: 'category',
      label: '07: SCHEDULING & ACTIVITIES',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'scheduling-activities/index', label: 'Club Hours & Scheduling' },
        'scheduling-activities/showcase-day',
      ],
    },
    {
      type: 'category',
      label: '08: GUIDELINES & GOVERNANCE',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'guidelines/index', label: 'Code of Conduct & Governance Guidelines' },
      ],
    },
    {
      type: 'category',
      label: '09: DOCUMENTATION & ARTIFACTS',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'doc', id: 'documentation/index', label: 'Project Documentation & Archives' },
      ],
    },
  ],
};

module.exports = sidebars;
