import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

const transitionName = "link";
const appearDuration = 1200;

interface Props {
  inTime: number;
}

export const LinkItem: React.FC<Props> = (props) => {
  const [linksIn, setTitleIn] = useState<boolean>(false);
  const [subTitleIn, setSubTitleIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleIn(true);
      setSubTitleIn(true);
    }, props.inTime);
  }, []);

  return (
    <CSSTransition
      classNames={transitionName}
      in={linksIn}
      timeout={appearDuration}
      unmountOnExit={true}
    >
      <Item delay={800 + props.inTime}>{props.children}</Item>
    </CSSTransition>
  );
};

const Item = styled.li<{ delay: number }>`
  font-size: 2.5rem;
  @media (min-width: 1000px) {
    font-size: 3rem;
  }
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &.${transitionName}-enter {
    transform: translateX(-50px);
  }
  &.${transitionName}-enter-active, &.${transitionName}-enter-done {
    transform: translateX(0);
    /* transition-property: transform, opacity; */

    /* transition-duration: ${appearDuration} */
    transition: transform ${appearDuration}ms cubic-bezier(0.1, 0.55, 0.07, 1),
      opacity 220ms ease-in, color 220ms ease-in;
    /* transition: opacity 200ms ease-in; */
  }
`;
