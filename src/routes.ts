import pageColors from "./pageColors.json"

import { Links } from "./structure/Links/Links";

import { Contact, Music, Projects, Resume } from "./pages";

export const routes = [
  { path: "/resume", Component: Resume, color: pageColors["#/resume"] },
  { path: "/music", Component: Music, color: pageColors["#/music"] },
  { path: "/projects", Component: Projects, color: pageColors["#/projects"] },
  { path: "/contact", Component: Contact, color: pageColors["#/contact"] },
  { path: "/", Component: Links, color: pageColors["#/"] },
];
