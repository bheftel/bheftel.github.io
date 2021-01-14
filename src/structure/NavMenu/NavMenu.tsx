import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { Links } from "../Links/Links";

interface Props {
  show: boolean;
}

export const NavMenu = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsExpanded(false);
    });
  }, []);

  const handleClick = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (props.show) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <LinksContainer
      onFocus={() => setIsExpanded(true)}
      onBlur={() => setIsExpanded(false)}
      onClick={handleClick}
      show={props.show}
    >
      <DropdownContainer isExpanded={isExpanded}>
        <Links />
      </DropdownContainer>
    </LinksContainer>
  );
};

const HeightContainer = styled.div`
  height: auto;
`;

const DropdownContainer = styled.div<{ isExpanded: boolean }>`
  /* display: ${({ isExpanded }) => (isExpanded ? "block" : "none")}; */
  transform: ${({ isExpanded }) => (isExpanded ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  overflow: hidden;
  height: auto;
  position: fixed;
  background-color: #e2deff;

  padding: 10px;

  transition: all 0.15s;
`;

const LinksContainer = styled.div<Props>`
  width: 50px;
  height: 50px;
  overflow: hidden;

  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  background-color: whitesmoke;
`;
