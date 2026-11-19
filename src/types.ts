export type IconsType =
  | "js"
  | "ts"
  | "html"
  | "css"
  | "c"
  | "cpp"
  | "python"
  | "react"
  | "django"
  | "drf"
  | "tailwind"
  | "mongodb"
  | "postgre"
  | "supabase"
  | "firebase"
  | "prisma"
  | "git"
  | "github"
  | "figma"
  | "vercel"
  | "npm"
  | "bun"
  | "vscode"
  | "wordpress"
  | "docker"
  | "aws"
  | "tensorflow"
  | "fastapi"
  | "nextjs"
  | "streamlit"
  | "langchain"
  | "langgraph"
  | "gemini"
  | "openai"
  | "ollama"
  | "groq"
  | undefined;

export type skillsBadgeType = {
  children: React.ReactNode;
  icon?: IconsType;
  size?: "sm" | "base";
};

export type ProjectType = {
  image: string;
  video?: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "On Hold";
  isUpdatingConstantly?: boolean;
  technologies: string[];
  liveLink: string;
  repoLink?: string;
};

export type ExperienceType = {
  highlights: string[];
  image: string;
  video?: string;
  title: string;
  company?: string;
  companyLink?: string;
  duration: string;
  description: string;
  technologies: string[];
};
