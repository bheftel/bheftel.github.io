import { Links } from "./structure/Links/Links";

import { Contact, Music, Projects, Resume } from "./pages";

export const routes = [
  { path: "/resume", Component: Resume, color: "#d1dfe0" },
  { path: "/music", Component: Music, color: "#edf175" },
  { path: "/projects", Component: Projects, color: "#c1d5bd" },
  { path: "/contact", Component: Contact, color: "#c1d5bd" },
  { path: "/", Component: Links, color: "#d5c4bd" },
];
