import React from "react";

import styled, { keyframes } from "styled-components";

interface Props {
  color?: string;
}

export const Background = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -4;
  height: 100%;
  width: 100%;
  content: "";
  background-color: ${(props) => props.color};
`;

const slide = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0px);

    }
`;

export const BackgroundAnimation = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -4;
  height: 100%;
  width: 100%;
  content: "";
  background-color: ${(props) => props.color};

  animation-name: ${slide};
  animation-duration: 0.75s;

  &.background-enter {
    opacity: 0.01;
    transform: translateX(-100%);
  }

  &.background-exit {
    opacity: 1;
  }

  &.background-enter-active,
  &.background-enter-done {
    opacity: 1;
    transition: all 200ms cubic-bezier(0.1, 0.55, 0.07, 1);
    transform: translateX(0px);
  }
  &.background-exit-active {
    opacity: 0.01;
    transition: all 200ms ease-out;
    /* top: 0; */
  }
`;
