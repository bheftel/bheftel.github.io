import React from "react";
import styled from "styled-components";

import { Section } from "../types";

interface Props {
  sections: Section[];
}

const getTitleHeader = (isSubsection: boolean): React.FC => ({ children }) =>
  isSubsection ? <h3>{children}</h3> : <h2>{children}</h2>;

const renderSections = (sections: Section[], isSubsection?: boolean) => {
  const TitleHeader = getTitleHeader(!!isSubsection);
  return sections.map((section, index) => {
    return (
      <div key={section.title || `section_${index}`}>
        <TitleHeader>{section.title}</TitleHeader>
        <h4>{section.date}</h4>
        <p>{section.description}</p>

        {section.bullets?.length && (
          <ul>
            {section.bullets.map((bullet, index) => (
              <li key={`${section}_bullet-${index}`}>{bullet}</li>
            ))}
          </ul>
        )}
        {section.subsections && (
          <Subsections>{renderSections(section.subsections, true)}</Subsections>
        )}
      </div>
    );
  });
};

export const ResumeSection: React.FC<Props> = (props) => {
  const sections = renderSections(props.sections);
  return <>{sections}</>;
};

const Subsections = styled.div``;
