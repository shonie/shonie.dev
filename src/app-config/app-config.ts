import { AppConfig } from '@/types/config';

export const appConfig: AppConfig = {
  siteName: 'Shonie.dev',
  profile: {
    email: 'contact@shonie.dev',
    social: {
      github: 'https://github.com/shonie',
      linkedin: 'https://www.linkedin.com/in/shonie/',
      instagram: 'https://www.instagram.com/shoniestarnikov/',
    },
    certifications: [
      'AWS Certified Solution Architect Pro',
      'AWS Certified Data Engineer',
    ],
    skills: [
      { name: 'React', years: '9+' },
      { name: 'Node.js', years: '9+' },
      { name: 'AWS', years: 'Certified Pro' },
      { name: 'PostgreSQL', years: 'Expert' },
      { name: 'MySQL', years: 'Expert' },
      { name: 'ETL Pipelines', years: 'Advanced' },
    ],
    databases: [
      'PostgreSQL',
      'MySQL',
      'Redshift',
      'Snowflake',
      'DynamoDB',
      'Neo4j',
    ],
  },
};
