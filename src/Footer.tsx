import React, { useContext } from "react";
import styled from "styled-components";
import { RadioContext } from "./App";
import { Color } from "./Utils";

export const Footer = () => {
  const { currentRadio } = useContext(RadioContext);

  if (!currentRadio) return null;

  return (
    <FooterContainer>
      <FooterInfoText>CURRENTLY PLAYING</FooterInfoText>
      <FooterRadioText>{currentRadio.name}</FooterRadioText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 60px;
  background: ${Color.BLACK};
  border-radius: 0 0 20px 20px;
`;

const FooterInfoText = styled.p`
  color: ${Color.YELLOW};
  font-size: 12px;
`;

const FooterRadioText = styled.p`
  color: ${Color.WHITE};
  margin-top: -10px;
`;
