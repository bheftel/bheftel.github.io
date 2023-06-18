import { ResumeContent } from "./types";

const resumeContent: ResumeContent = {
  title: "brannon heftel",
  subtitle: "front-end focused full-stack developer",
  mainSections: [
    {
      title: "Work Experience",
      subsections: [
        {
          title: "NGINX / F5 Networks",
          date: "March 2021 - Present - Senior Software Engineer",
          description: "Front-end development for SaaS products",
          bullets: [
            "Maintenance of legacy JS React and express app",
            "New feature development for F5 Distributed Cloud using Angular",
            "Led TypeScript rewrite of legacy React app",
            "Security reviews and threat model assessments of UI and web services",
            "Contributions to shared design system",
          ],
        },{
          title: "NGINX / F5 Networks",
          date: "May 2019 - March 2021 - Software Engineer III",
          description: "Front-end development for NGINX Controller",
          bullets: [
            "Migration of JS React/Redux app to TypeScript with React and Styled-Components",
            "Component development for design system",
            "Helped lead efforts for sharing common code across projects and writing internal libraries and frameworks",
            "Set up monorepos and build pipelines for multiple projects with Lerna, Yarn workspaces, webpack, and Gitlab CI",
            "Server-side node.js with express",
            "Testing with Jest + Enzyme, React Testing Library, Cypress",
            "Collaborating across time zones with global team",
          ],
        },
        {
          title: "F5 Networks",
          date: "Oct 2016 - May 2019 — Software Engineer III",
          description:
            "Front-end for control plane products BIG-IQ and iWorkflow",
          bullets: [
            "AngularJS and associated ecosystem tools",
            "Server-side node.js",
            "Wore many hats - testing, visual design, API design, and wrote customer facing documentation",
          ],
        },
        {
          date: "Oct 2014 - Sept 2016 — Software Engineer II",
        },
        {
          date: "Sept 2013 - Sept 2014 — Software Engineer I",
          bullets: [
            "Backbone.js to AngularJS migration, contributions to custom framework extensions, bug fixes and feature development",
          ],
        },
        {
          title: "Porch",
          date: "June 2013 - Aug 2013  — Software Development Intern",
          description:
            "Various tasks for an early stage startup. Java and Python.",
        },
        {
          title: "Connect XYZ",
          date: "June 2012 - Nov 2012 - Software Development Intern",
          description:
            "JavaScript, PHP, HTML/CSS development and testing for an ecommerce logistics app",
        },
      ],
    },
  ],
  rightSections: [
    {
      title: "Development Philosophy",
      bullets: [
        "I try to write code that I’d want to inherit and maintain",
        "Write tests I can trust",
        "If I find it, I try to fix it",
        "Always try to help others",
        "Always admit when I don’t know something, then try to learn it",
        "There is no magic in any system - it’s all just code to read",
      ],
    },
    {
      title: "Technologies",
      description: "JavaScript, TypeScript",
      bullets: [
        "Primarily using TypeScript since 2018",
        "React, AngularJS",
        "styled-components, LESS/SCSS",
        "node.js and express, some Next.js",
        "lots of build and testing tools - jest, enzyme, mocha/chai, react-testing-library, cypress, testcafe, gulp, webpack, rollup, nx",
      ],
    },
    {
      description: "Tooling and Devops",
      bullets: [
        "Gitlab CI, GitHub Actions, bash scripts, nginx configs",
        "Docker, k8s",
        "Familiarity with Terraform, AWS deployments, general networking",
      ],
    },
    {
      title: "Other",
      bullets: [
        "Non-recent experience with Go, Java, Python, PHP",
        "SQL and noSQL databases",
        "GraphQL, websockets, gRPC",
        "RESTful API design",
        "Academic experience with C/C++",
      ],
    },
    {
      title: "Education",
      subsections: [
        {
          title: "University of Washington Bothell",
          date: "2012-2013 - BS in Computer Science and Software Engineering",
          description:
            "Traditional computer science coursework coupled with courses on engineering principles and software development practices. In-major GPA of 3.79",
        },
        {
          title: "University of Washington",
          date: "2007-2008, and 2011-2012",
        },
      ],
    },
  ],
};

export default resumeContent;
