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

export interface CVData {
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

export interface Legal {
  office: string;
  vat: string;
  kvk: string;
}

export const CV_DATA: CVData = {
  name: 'Oleksandr Starnikov',
  title: 'Technical architect',
  summary:
    'A cloud architect with a decade of experience building advanced B2B solutions end-to-end. An expert at data engineering and web application development. Currently operating as an independent contractor, providing remote software architecture and engineering services, while remaining open to long-term contracts and on-site engagements.',
  career: [
    {
      role: 'Technical lead/architect, Rio ESG',
      dates: '2021 - present',
      bullets: [
        [
          'Developed an AI-powered data analysis assistant',
          ' using AWS Bedrock and real-time HTTP streaming',
        ],
        [
          'Coordinated the migration from Snowflake to AWS Redshift',
          ', addressing architectural flaws and significantly improving data quality and stakeholder trust in reporting.',
        ],
        [
          'Implemented AI-driven remediation workflows',
          ' that automatically diagnose and resolve runtime errors',
        ],
        [
          'Led a major product redesign',
          ' using Material design and AG Charts with focus on visual excellence',
        ],
        [
          'Led the migration of CI/CD pipelines',
          ' to GitHub Actions and consolidated repositories into a monorepo, enabling a higher degree of automation and standardisation.',
        ],
      ],
    },
    {
      role: 'Full-stack developer, Rio ESG',
      dates: '2019 - 2021',
      bullets: [
        [
          'Designed database schemas',
          ' that supported complex business requirements across Amazon Aurora, Snowflake, and Amazon Athena',
        ],
        ['Built charts and dashboards', ' using QuickSight'],
        ['Developed and maintained ETL pipelines', ' running on AWS Glue'],
        [
          'Developed and optimised a large GraphQL API',
          ' comprising nearly 1,000 queries and mutations',
        ],
      ],
    },
    {
      role: 'Node.js developer, SoftServe',
      dates: '2018 - 2019',
      bullets: [
        ['Managed Terraform-based AWS infrastructure', ' including SQS, DynamoDB, EC2, and S3'],
        ['Developed a pool of Node.js data-processing services', ' running on EC2.'],
        ['Increased automated test coverage', ' to approximately 90%'],
        ['Developed REST APIs', ' and accompanying Open API documentation'],
      ],
    },
    {
      role: 'Frontend developer, SoftServe',
      dates: '2017 - 2018',
      bullets: [
        [
          'Initiated a data visualisation platform',
          " for one of the world's leading consulting firms",
        ],
        ['Mentored three junior frontend developers', ''],
        [
          'Extended the platform',
          ' with offline data processing and reactive visualisations using TypeScript, React and Highcharts',
        ],
        ['Implemented pixel-perfect user interfaces', ' based on Figma designs'],
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
    'Team leadership',
    'Junior staff mentorship',
    'Cloud expenses budgeting',
    'Requirements analysis',
    'Technical debt management',
    'Data engineering',
    'Node.js',
    'React',
    'GraphQL',
    'RESTful API',
    'MySQL',
    'PostgreSQL',
    'Snowflake',
    'Business intelligence',
    'Amazon Web Services',
    'Terraform',
    'Serverless computing',
    'ETL',
    'CI/CD',
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
    { label: 'Notice period', text: 'Can start working at any time' },
    {
      label: 'Employment type',
      text: 'Providing services on an hourly basis. Please contact me using the contacts below to discuss your project and engagement requirements.',
    },
    {
      label: 'Where',
      list: ['Digital products', 'Startups', 'Agencies', 'Enterprise'],
    },
  ],
  contacts: [
    { icon: 'linkedin', text: 'https://linkedin/in/shonie', href: '#', underline: true },
    { icon: 'envelope', text: 'recruit@shonie.dev', href: 'mailto:recruit@shonie.dev' },
    { icon: 'github', text: 'https://github.com/shonie', href: '#' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Cloud & Infra',
    items: ['Amazon Web Services', 'Terraform', 'Serverless computing', 'CI/CD'],
  },
  {
    label: 'Data',
    items: ['Data engineering', 'Snowflake', 'ETL', 'Business intelligence', 'MySQL', 'PostgreSQL'],
  },
  {
    label: 'Development',
    items: ['Node.js', 'React', 'GraphQL', 'RESTful API'],
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

export const AVAIL_PREFS: AvailPref[] = [
  { label: 'Notice period', value: 'Can start at any time' },
  { label: 'Employment', value: 'Hourly basis · contract' },
  { label: 'Location', value: 'Remote · open to on-site' },
  { label: 'Clients', value: 'Digital products · Startups · Agencies · Enterprise' },
];

// Legal / company details shown in the footer.
// TODO: replace the placeholders below with the real registered details.
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
