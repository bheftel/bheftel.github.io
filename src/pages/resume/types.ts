export interface Section {
  title?: string;
  date?: string;
  description?: string;
  subsections?: Section[];
  bullets?: string[];
}

export interface ResumeContent {
  title: string;
  subtitle: string;
  mainSections: Section[];
  rightSections: Section[];
}
