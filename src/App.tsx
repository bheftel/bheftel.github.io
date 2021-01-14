import React, { useState } from "react";
// import logo from './logo.svg';
// import "./App.css";

import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

import { routes } from "./routes";

import { Background, BackgroundAnimation } from "./structure/Background";

import { Title } from "./structure/title/Title";
import { SubTitle } from "./structure/title/SubTitle";
// import { Links } from "./structure/Links/Links";

import {
  // use hashrouter so github pages is ok
  HashRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

const App = () => {
  const [bgColor, setBgColor] = useState<string>("#d5c4bd");

  const handleChangeColor = (color: string) => {
    setBgColor(color);
  };

  return (
    <ContentConatiner className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Background id="background" color={bgColor} />
      <Router>
        <Title />
        <SubTitle />
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={route.path} exact={true} path={route.path}>
                {({ match }) => {
                  setTimeout(() => {
                    handleChangeColor(route.color);
                  }, 200);
                  return (
                    <>
                      <CSSTransition
                        in={match !== null}
                        timeout={200}
                        classNames="background"
                        unmountOnExit={true}
                        mountOnEnter={true}
                      >
                        <BackgroundAnimation color={route.color} />
                      </CSSTransition>
                      <route.Component />
                    </>
                  );
                }}
              </Route>
            );
          })}
          {/* <Route path="/resume">
            <div>resume</div>
          </Route>
          <Route path="/">
            <Links />
          </Route> */}
        </Switch>
      </Router>
    </ContentConatiner>
  );
};

const ContentConatiner = styled.div`
  width: 80%;
  margin: 40px auto;
`;

export default App;
