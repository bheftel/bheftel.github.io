import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

const transitionName = "pageContent";
const appearDuration = 400;

export const PageContent: React.FC<{children: ReactNode}> = (props) => {
  const [contentIn, setContentIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setContentIn(true);
    }, 300);
  }, []);

  return (
    <CSSTransition
      classNames={transitionName}
      in={contentIn}
      unmountOnExit={true}
      timeout={appearDuration}
    >
      <ContentContainer>{props.children}</ContentContainer>
    </CSSTransition>
  );
};

const ContentContainer = styled.div`
  font-size: 24px;
  margin: 0 auto;

  max-width: 100%;

  @media (min-width: 1000px) {
    padding: 50px;
    max-width: 85%;
  }

  h1 {
    margin-top: 0;
  }

  &.${transitionName}-enter {
    margin-left: -50px;
  }
  &.${transitionName}-enter-active, &.${transitionName}-enter-done {
    margin-left: 0px;
    transition: margin-left ${appearDuration}ms cubic-bezier(0.1, 0.55, 0.07, 1);
  }
`;
