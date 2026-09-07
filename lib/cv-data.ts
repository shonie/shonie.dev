// shonie.dev — site content (verbatim from the CV source)

export type IconKey = 'linkedin' | 'envelope' | 'github';

export interface CareerItem {
  role: string;
  dates: string;
  bullets: [string, string][];
}

export interface TitledItem {
  title: string;
  bullets: string[];
}

export interface WorkPref {
  label: string;
  text?: string;
  list?: string[];
}

export interface Contact {
  icon: IconKey;
  text: string;
  href: string;
  underline?: boolean;
}

export interface CvData {
  name: string;
  title: string;
  summary: string;
  career: CareerItem[];
  education: TitledItem[];
  certifications: TitledItem[];
  courses: TitledItem[];
  skills: string[];
  hobbies: string[];
  languages: string[];
  workPrefs: WorkPref[];
  contacts: Contact[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface AvailPref {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface Legal {
  office: string;
  vat: string;
  kvk: string;
}

export const CV_DATA: CvData = {
  name: 'Oleksandr Starnikov',
  title: 'Solution architect',
  summary:
    'A solution architect with a decade of experience designing and building advanced B2B systems end-to-end — across cloud infrastructure, data engineering, and web application development. Currently operating as an independent contractor, providing remote software architecture and engineering services, while remaining open to long-term contracts and full-time roles.',
  career: [
    {
      role: 'Technical lead/architect, Rio AI',
      dates: '2021 - present',
      bullets: [
        [
          'Migrated the data platform from Snowflake to Redshift',
          ', trading raw compute for the precision of AWS-managed zero-ETL integration — a shift that cut data-related bugs reported that year by 75% compared with the year before',
        ],
        [
          'Built an AI- and Sentry-driven error-remediation system',
          ' that automatically diagnoses and resolves runtime errors, cutting response time to production bugs to 15 minutes',
        ],
        [
          'Planned and led the rollout of a new design system',
          ' for a full product redesign spanning more than 1,000 React components, sequenced for a smooth, incremental migration',
        ],
        [
          'Replaced QuickSight with in-house AG Charts dashboards',
          ', taking full control of every visual component to ensure a consistent look and feel across the product',
        ],
        [
          'Developed an AI-powered data-analysis assistant',
          ' using AWS Bedrock AgentCore and real-time HTTP streaming',
        ],
        [
          'Migrated 50+ repositories from Bitbucket to GitHub',
          ' and consolidated core services into a monorepo to streamline CI/CD and code sharing.',
        ],
      ],
    },
    {
      role: 'Full-stack developer, Rio AI',
      dates: '2019 - 2021',
      bullets: [
        [
          'Designed database schemas and ETL pipelines',
          ' that supported complex business requirements across Amazon Aurora, Snowflake, and Amazon Athena',
        ],
      ],
    },
    {
      role: 'Node.js developer, SoftServe',
      dates: '2018 - 2019',
      bullets: [
        ['Managed Terraform-based AWS infrastructure', ' including SQS, DynamoDB, EC2, and S3'],
      ],
    },
    {
      role: 'Frontend developer, SoftServe',
      dates: '2017 - 2018',
      bullets: [
        [
          'Extended the platform',
          ' with offline data processing and reactive visualisations using TypeScript, React and Highcharts',
        ],
      ],
    },
    {
      role: 'Junior full-stack developer, Icecat.biz',
      dates: '2016 - 2017',
      bullets: [['Developed an isomorphic JavaScript application', ' for an e-commerce platform']],
    },
  ],
  education: [
    {
      title: 'Ukrainian State University',
      bullets: [
        'Bachelor of Philosophy',
        'Thesis: “Hyperreality in the Works of Jean Baudrillard”',
      ],
    },
  ],
  certifications: [
    {
      title: 'AWS Certified Solutions Architect Professional 2023 - 2024',
      bullets: [
        'Demonstrated expertise in designing reliable, secure, high-performing, and cost-efficient cloud architectures on AWS',
      ],
    },
  ],
  courses: [
    {
      title: 'HowProgrammingWorks, Kyiv Polytechnic Institute 2017 - 2018',
      bullets: [
        'Got fundamental knowledge about Node.js internals and invaluable DIY experience in writing efficient servers',
      ],
    },
    {
      title: 'Brain Academy – 2015 - 2016',
      bullets: ['Full stack development course'],
    },
  ],
  skills: [
    'Technical leadership in software projects',
    'Efficient communication on technical topics',
    'Amazon Web Services',
    'SQL databases (MySQL, PostgreSQL, Redshift, Snowflake, PrestoSQL)',
    'NoSQL databases (Neo4j, MongoDB, DynamoDB, Redis)',
    'Business intelligence tools (QuickSight, Power BI, Excel)',
    'Data engineering (data modeling, ETL, data warehousing)',
    'Full-stack development (Node.js, React, TypeScript, Next.js, GraphQL, RESTful, WebSocket)',
    'DevOps (CI/CD, GitHub Actions, Docker, ECS, Jenkins, BitBucket, Terraform, CloudFormation)',
    'Serverless computing',
  ],
  hobbies: [
    'Vinyl record collecting',
    'Travelling',
    'Contemporary philosophy',
    'English literature of the 20th century',
    'Arthouse films',
  ],
  languages: ['Ukrainian — native', 'English — fluent', 'Russian — fluent', 'Dutch — intermediate'],
  workPrefs: [
    { label: 'Notice period', text: 'Available to start within one to two weeks' },
    {
      label: 'Employment type',
      text: 'Contract engagements on an hourly basis, and open to full-time roles for the right opportunity. Please get in touch to discuss your project and engagement requirements.',
    },
    {
      label: 'Where',
      list: ['Digital products', 'Startups', 'Agencies', 'Enterprise'],
    },
  ],
  contacts: [
    {
      icon: 'linkedin',
      text: 'linkedin.com/in/shonie',
      href: 'https://linkedin.com/in/shonie',
      underline: true,
    },
    { icon: 'envelope', text: 'recruit@shonie.dev', href: 'mailto:recruit@shonie.dev' },
    { icon: 'github', text: 'https://github.com/shonie', href: 'https://github.com/shonie' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Cloud & Infra',
    items: [
      'Amazon Web Services',
      'Terraform',
      'Serverless computing',
      'CI/CD',
      'GitHub Actions',
      'Docker',
      'CloudFormation',
    ],
  },
  {
    label: 'Data',
    items: [
      'Data engineering',
      'Snowflake',
      'ETL',
      'Business intelligence',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Redshift',
      'MongoDB',
      'DynamoDB',
      'AWS Glue',
      'Apache Spark',
      'Excel',
    ],
  },
  {
    label: 'Development',
    items: [
      'Node.js',
      'React',
      'TypeScript',
      'Python',
      'Bash',
      'GraphQL',
      'RESTful API',
      'Claude Code',
    ],
  },
  {
    label: 'Leadership',
    items: [
      'Team leadership',
      'Junior staff mentorship',
      'Requirements analysis',
      'Technical debt management',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'A natural ability to bring colleagues together into a tight, focused team — and the determination to raise standards right across the group.',
    author: 'CTO',
    role: 'Rio AI',
  },
  {
    quote:
      'Smart, results-oriented, and fearless with new technologies — a perfect fit for R&D projects, with real leadership experience.',
    author: 'Head of development',
    role: 'SoftServe',
  },
  {
    quote:
      'An exemplary lead developer. Any team would be lucky to have him as their Tech Lead, Solutions Architect, or CTO.',
    author: 'Senior developer',
    role: 'Rio AI',
  },
  {
    quote:
      'Probably the most capable and responsive developer I have worked with — the kind who comes to the table with options rather than issues.',
    author: 'Head of development',
    role: 'Rio AI',
  },
  {
    quote:
      'Consistently delivered high-quality code and innovative solutions to complex problems — and upskilled himself in carbon accounting remarkably fast.',
    author: 'Sustainability consultant',
    role: 'Rio AI',
  },
];

export const AVAIL_PREFS: AvailPref[] = [
  { label: 'Notice period', value: '~1–2 weeks' },
  { label: 'Employment', value: 'Contract (hourly) · open to full-time' },
  { label: 'Location', value: 'Remote · open to on-site' },
  { label: 'Clients', value: 'Digital products · Startups · Agencies · Enterprise' },
];

// Legal / company details shown in the footer.
export const LEGAL: Legal = {
  office: 'Landréstraat 1023, 2551 BP The Hague, Netherlands',
  vat: 'NL005272494B27',
  kvk: '97473847',
};

export const ICONS: Record<IconKey, string> = {
  linkedin: '/icon-linkedin.svg',
  envelope: '/icon-envelope.svg',
  github: '/icon-github.svg',
};
