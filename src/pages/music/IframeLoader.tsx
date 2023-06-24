import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  src: string;
  height: number;
}

export const IframeLoader = (props: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <Container $loaded={loaded}>
      {!loaded && <Spinner />}
      <IframeContainer $loaded={loaded} $height={props.height}>
        <iframe
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          src={props.src}
          height={props.height}
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </IframeContainer>
    </Container>
  );
};

const Container = styled.div<{ $loaded: boolean }>`
  position: relative;
`;
const IframeContainer = styled.div<{ $loaded: boolean; $height: number }>`
  height: ${p => p.$height}px;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.85);
    opacity: ${(props) => (props.$loaded ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;

    width: 100%;
    @media (min-width: 1000px) {
      width: 80%;
    }
  }
  iframe {
    display: block;
    border-radius: 12px;
    position: relative;

    height: ${p => p.$height}px;
    width: 100%;
    @media (min-width: 1000px) {
      width: 80%;
    }
  }
`;

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

// spinner based on https://loading.io/css/
const Spinner = styled.div`
  position: absolute;
  top: 20px;
  left: 35%;
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #7c7c7c;
  border-color: #7c7c7c transparent #7c7c7c transparent;
  animation: ${spin} 1.8s linear infinite;
`;
