export interface Skill {
  name: string;
  years: string;
}

export interface Profile {
  email: string;
  skills: Skill[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  certifications: string[];
  databases: string[];
}

export interface AppConfig {
  siteName: string;
  profile: Profile;
}
