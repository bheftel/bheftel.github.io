import { Links } from "./structure/Links/Links";

import { Contact, Music, Projects, Resume } from "./pages";

export const routes = [
  { path: "/resume", Component: Resume, color: "#d1dfe0" },
  { path: "/music", Component: Music, color: "#e4d356" },
  { path: "/projects", Component: Projects, color: "#c1d5bd" },
  { path: "/contact", Component: Contact, color: "#b5ffa6" },
  { path: "/", Component: Links, color: "#d5c4bd" },
];
