import React from "react";
import styled from "styled-components";
import { Color } from "./Utils";
import { CSS_COLOR_FILTER } from "./Utils";

export const Navbar = () => (
  <StyledNavbarContainer>
    <StyledIcon alt="back" src="https://img.icons8.com/android/344/back.png" />

    <StyledNavbarHeadline>STATIONS</StyledNavbarHeadline>

    <StyledIcon
      alt="power off"
      src="https://img.icons8.com/ios/344/power-off-button--v1.png"
    />
  </StyledNavbarContainer>
);

const StyledNavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: ${Color.YELLOW};
  position: sticky;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavbarHeadline = styled.h1`
  color: ${Color.WHITE};
  margin: auto;
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  filter: ${CSS_COLOR_FILTER};
`;
