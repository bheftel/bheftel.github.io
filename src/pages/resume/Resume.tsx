import React from "react";

import styled from "styled-components";

import { PageContent } from "../PageContent";

import { ResumeLayout } from "./components/ResumeLayout";
import resumeContent from "./resumeContent";

export const Resume = () => {
  return (
    <PageContent>
      <h1>resume</h1>
      <LinkContainer>
        <a
          href="https://www.linkedin.com/in/brannon-heftel-83507040"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </LinkContainer>
      <ResumeLayout content={resumeContent}></ResumeLayout>
    </PageContent>
  );
};

const LinkContainer = styled.div`
  margin-bottom: 20px;
`;
