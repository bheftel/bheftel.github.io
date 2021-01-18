import React from "react";
import styled from "styled-components";

import { ResumeSection } from "./ResumeSection";

import { ResumeContent } from "../types";

export const ResumeLayout: React.FC<{ content: ResumeContent }> = (props) => {
  return (
    <GridWrapper>
      <MainSection>
        <ResumeSection sections={props.content.mainSections} />
      </MainSection>
      <RightSection>
        <ResumeSection sections={props.content.rightSections} />
      </RightSection>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  font-size: smaller;
  @media (min-width: 1000px) {
    font-size: inherit;
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  width: 100%;

  h2 {
    color: #21589e;
    font-size: 28px;

    margin: 5px 0 3px;
  }

  h3 {
    margin: 10px 0;
  }
  h4 {
    margin: 10px 0;
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
  }

  p {
    margin: 5px 0;
  }
  ul {
    margin-top: 8px;
    padding-left: 15px;
    @media (min-width: 1000px) {
      padding-left: 30px;
    }
  }
  li {
    list-style: "- ";
    margin: 5px 0;
  }
`;

const MainSection = styled.div`
  grid-column: 1;
  @media (min-width: 1000px) {
    grid-column: 1 / 3;
  }
`;

const RightSection = styled.div`
  grid-column: 1;
  @media (min-width: 1000px) {
    grid-column: 3 / 4;
  }
`;
