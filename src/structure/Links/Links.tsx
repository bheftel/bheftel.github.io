import React from "react";
import styled from "styled-components";

import { LinkItem } from "./components/LinkItem";

import { Link } from "react-router-dom";

// todo - consolidate route defs
const linkItemContent = [
  {
    label: "resume",
    path: "/resume",
  },
  {
    label: "music",
    path: "/music",
  },
  // {
  //   label: "projects",
  //   path: "/projects",
  // },
  {
    label: "contact",
    path: "/contact",
  },
];

const startTime = 250;

export const Links = () => {
  return (
    <List>
      {linkItemContent.map((item, index: number) => (
        <LinkItem key={item.label} inTime={startTime * index + 800}>
          <Link to={item.path}>{item.label}</Link>
        </LinkItem>
      ))}
    </List>
  );
};

export const List = styled.ul`
  list-style: none;
  padding-left: 10px;
  margin-top: 40px;

  line-height: normal;
  height: 80%;
`;
