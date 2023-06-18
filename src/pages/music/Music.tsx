import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { IframeLoader } from "./IframeLoader";
import { PageContent } from "../PageContent";

export const Music: FC<{children: ReactNode}> = () => {
  return (
    <PageContent>
      <h1>music</h1>
      <p>
        i've written and performed music off and on for over 15 years. usually
        acoustic singer-songwriter kind of stuff, and usually playing guitar.
      </p>
      <ExternalContainer>
        <h3>spotify</h3>
        <IframeLoader src="https://open.spotify.com/embed/album/7B8xL2tNscsKIS3zOg90zc?utm_source=generator&theme=0" height={380}></IframeLoader>
      </ExternalContainer>
      <ExternalContainer>
        <h3>bandcamp</h3>
        <IframeLoader src="https://bandcamp.com/EmbeddedPlayer/track=1516874966/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" height={120}/>
      </ExternalContainer>
      <ExternalContainer>
        <h3>instagram</h3>
        <a
          href="https://www.instagram.com/brannonheftelmusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @brannonheftelmusic
        </a>
      </ExternalContainer>
    </PageContent>
  );
};

const ExternalContainer = styled.div`
  margin-top: 40px;
`;
