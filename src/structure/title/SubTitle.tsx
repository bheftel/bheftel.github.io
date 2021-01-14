import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

import { useRouteMatch } from "react-router-dom";

const transitionName = "test";
const appearDuration = 1200;

export const SubTitle = () => {
  const [subTitleIn, setSubTitleIn] = useState<boolean>(false);

  const isHomeScreen = useRouteMatch({
    path: "/",
    strict: true,
  });

  useEffect(() => {
    if (!!isHomeScreen?.isExact) {
      setTimeout(() => {
        setSubTitleIn(true);
      }, appearDuration / 3);
    } else {
      setSubTitleIn(false);
    }
  }, [isHomeScreen]);

  return (
    <CSSTransition
      classNames={transitionName}
      timeout={{ appear: appearDuration, exit: appearDuration / 5 }}
      in={subTitleIn}
      unmountOnExit={true}
    >
      <SubTitleContainer>
        front-end leaning full-stack developer
      </SubTitleContainer>
    </CSSTransition>
  );
};

const SubTitleContainer = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 10px;
  position: relative;

  /* font-size: 11px; */
  line-height: 0.8;
  letter-spacing: -2px;
  /* font-weight: 300; */

  &.${transitionName}-enter {
    opacity: 0.01;
    transform: translateY(-100px);
  }

  &.${transitionName}-enter-active, &.${transitionName}-enter-done {
    opacity: 1;
    transition: all ${appearDuration}ms cubic-bezier(0.1, 0.55, 0.07, 1);
    transform: translateY(0);
  }
  &.${transitionName}-exit-active {
    opacity: 0.01;
    transition: opacity ${appearDuration / 5}ms ease-out;
    top: 0;
  }
`;
