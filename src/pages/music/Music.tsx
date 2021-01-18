import React, { FC } from "react";
import styled from "styled-components";

import { IframeLoader } from "./IframeLoader";
import { PageContent } from "../PageContent";

export const Music: FC<{}> = () => {
  return (
    <PageContent>
      <h1>music</h1>
      <p>
        i've written and performed music off and on for over 15 years. usually
        acoustic singer-songwriter kind of stuff, and usually playing guitar.
      </p>
      <ExternalContainer>
        <h3>spotify</h3>
        <IframeLoader src="https://open.spotify.com/embed/artist/40LEZjzdNjvKwRg3gLioBZ"></IframeLoader>
      </ExternalContainer>
      <ExternalContainer>
        <h3>soundcloud</h3>
        <IframeLoader src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/615506784&color=%236c6c5c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></IframeLoader>
      </ExternalContainer>{" "}
      <ExternalContainer>
        <h3>instagram</h3>
        <a
          href="https://www.instagram.com/brannonheftelmusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brannonheftelmusic
        </a>
      </ExternalContainer>
    </PageContent>
  );
};

const ExternalContainer = styled.div`
  margin-top: 40px;
`;
