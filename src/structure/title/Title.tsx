import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { CSSTransition } from "react-transition-group";

import { appearDuration, switchDuration, TransitionNames } from "../../config";

import { SubTitle } from "./SubTitle";

import { Links, List } from "../Links/Links";

import { NavMenu } from "../NavMenu/NavMenu";

import { Link, useRouteMatch } from "react-router-dom";

const titleIn = TransitionNames.titleIn;
const titleSwitch = TransitionNames.titleIn + "_switch"; // todo - const for this

export const Title = () => {
  // console.error(TransitionNames);
  const [titleShow, setTitleIn] = useState<boolean>(false);

  const isHome =
    useRouteMatch({
      path: "/",
      exact: true,
    })?.isExact || false;

  useEffect(() => {
    setTimeout(() => {
      setTitleIn(true);
    }, 0);
  }, []);

  return (
    <TitleBarContainer>
      {/* <NavMenu show={!isHome} /> */}
      <div>
        <CSSTransition
          classNames={titleIn}
          timeout={appearDuration}
          in={titleShow}
          unmountOnExit={true}
        >
          <TitleContainer isHome={!!isHome}>
            <CSSTransition
              classNames={titleSwitch}
              timeout={switchDuration}
              in={isHome}
              unmountOnExit={true}
            >
              <HomeTitle>brannon heftel</HomeTitle>
            </CSSTransition>
            {
              // todo - maybe need another transition so it stays for a moment
              !isHome && (
                <LinkContainer isHome={!!isHome}>
                  <Link to="/">bh</Link>
                </LinkContainer>
              )
            }
          </TitleContainer>
        </CSSTransition>
      </div>
    </TitleBarContainer>
  );
};

const Svg = styled.svg`
  /* margin-top: -1rem; */
  /* margin-left: -50px; */
  width: 100%;
`;

const HeightContainer = styled.div`
  min-height: 130px;
`;

const TitleBarContainer = styled.div`
  /* display: flex; */
  /* height: 130px; */

  /* font-size: 11px; */
  /* line-height: 0.8; */
  letter-spacing: -0.2em;
  font-weight: 300;
`;

const HomeTitle = styled.div`
  /* display: flex; */
  /* height: 130px; */

  &.${titleSwitch}-exit {
    transition: transform 300ms,
      height 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 300ms;

    opacity: 0;

    /* font-size: 4rem; */
    transform: translateX(-100%);
    transform-origin: left;
  }

  &.${titleSwitch}-enter {
    transition: transform 300ms,
      height 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 300ms;

    /* font-size: 4rem; */
    transform: translateX(-100%);
    transform-origin: left;
  }

  &.${titleSwitch}-enter-active, &.${titleSwitch}-enter-done {
    opacity: 1;
    transform: translateX(0px);
  }
`;

// todo - clicking, not hovering for this

const LinkContainer = styled.div<{ isHome: boolean }>`
  /* position: ${({ isHome }) => (isHome ? "absolute" : "relative")}; */
  position: absolute;
  top: 0;
  /* height: 130px; */

  a {
    color: black;
  }
`;

const TitleContainer = styled.h1<{ isHome: boolean }>`
  a {
    text-decoration: none;
  }

  font-size: 4rem;
  min-height: 100px;

  @media (min-width: 1000px) {
    font-size: 10rem;
    min-height: 187.5px;
  }
  padding: 0;
  margin: 0;
  /* min-height: 100%; */
  /* margin-left: -1px; */
  position: relative;
  bottom: 0;
  text-align: left;

  overflow: hidden;

  /* height: 0; */

  &.${titleIn}-enter {
    opacity: 0.01;
    transform: translateY(-100px);
    /* object-position: right; */
  }

  &.${titleIn}-exit {
    opacity: 1;
  }

  &.${titleIn}-enter-active, &.${titleIn}-enter-done {
    opacity: 1;
    transition: all ${appearDuration}ms cubic-bezier(0.1, 0.55, 0.07, 1);
    transform: translateY(0px);
  }
  &.${titleIn}-exit-active {
    opacity: 0.01;
    transition: opacity ${appearDuration}ms ease-out;
    top: 0;
  }

  ${({ isHome }) => {
    if (!isHome) {
      return css`
        /* transition: transform 500ms, height 400ms ease 100ms;
              transform: scale(.2);
              transform-origin: left; */

        height: 0;
      `;
    } else {
      return css`
        transition: transform 400ms ease 100ms, height 500ms;
        transform-origin: left;
        /* transition: font-size 400ms ease 100ms, height 500ms; */

        /* height: 130px; */
      `;
    }
  }}
`;
