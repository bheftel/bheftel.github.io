import React from "react";
import styled from "styled-components";

export class Comp extends React.PureComponent {
  public render() {
    return (
      <Background>
        <LeftBar></LeftBar>
        <div>this is a thing</div>
      </Background>
    );
  }
}

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: lightblue;
`;

const LeftBar = styled.div`
  position: relative;
  top: -20%;
  left: -20%;
  height: 100%;
  width: 45%;

  clip-path: polygon(
    15% 15%,
    100% 10%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    10% 75%
  );

  background-color: lightgreen;
`;
