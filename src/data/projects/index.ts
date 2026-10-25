export { majorProjects } from "./majorProjects";
export { minorProjects } from "./minorProjects";
export { usersProjects } from "./usersProjects";

import { majorProjects } from "./majorProjects";
import { minorProjects } from "./minorProjects";
import { usersProjects } from "./usersProjects";

export const allProjects = [
  ...majorProjects,
  ...minorProjects,
  ...usersProjects,
];

export const projectCounts = {
  major: majorProjects.length,
  minor: minorProjects.length,
  users: usersProjects.length,
  total: majorProjects.length + minorProjects.length + usersProjects.length,
};
