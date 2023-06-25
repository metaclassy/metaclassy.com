export interface Template {
  url: string;
  description: string;
  title: string;
};
const droplr: Template = {
  url: "https://www.droplr.com/",
  description: "iOS and Mac app development.",
  title: "Droplr.com"
};
const ancestry: Template = {
  url: "https://www.ancestry.com/",
  description: "iPhone and iPad app development.",
  title: "Ancestry.com"
};
const colorthemes: Template = {
  url: "https://github.com/jpedroso/color-themes",
  description: "A color theme for Xcode and IntelliJ code editors.",
  title: "CSSEdit Tribute Color Theme"
};
export const byName = {
  droplr,
  ancestry,
  colorthemes,
};
export const otherProjects = Object.values(byName);
