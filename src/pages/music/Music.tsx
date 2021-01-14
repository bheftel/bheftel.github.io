import React, { FC } from "react";
import styled from "styled-components";

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
        <iframe
          src="https://open.spotify.com/embed/artist/40LEZjzdNjvKwRg3gLioBZ"
          width="500"
          height="280"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </ExternalContainer>
      <ExternalContainer>
        <h3>soundcloud</h3>
        <iframe
          width="500"
          height="280"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/615506784&color=%236c6c5c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </ExternalContainer>{" "}
      <ExternalContainer>
        <h3>instagram</h3>
        <a href="https://www.instagram.com/brannonheftelmusic/" target="_blank">
          brannonheftelmusic
        </a>
      </ExternalContainer>
    </PageContent>
  );
};

const ExternalContainer = styled.div`
  margin-top: 40px;
  iframe {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.85);
  }
`;
