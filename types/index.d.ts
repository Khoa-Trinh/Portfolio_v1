declare type AboutmeMain = {
  title: string;
  description: string;
  type?: "long" | "short";
  icons: {
    url: string;
    position: [string, number, number];
    rotate: number;
    size: [number, number];
  }[];
};

declare type AboutmeSkill = {
  url: string;
  pLanguage: string;
  progress: number;
};

declare type AboutmeFunFact = Omit<AboutmeMain, "type">;

declare type ResumeEducation = Omit<AboutmeMain, "type"> & {
  time: string;
};

declare type ResumeExperience = ResumeEducation & {
  month?: boolean;
};
