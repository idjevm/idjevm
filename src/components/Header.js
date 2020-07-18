import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { theme, mq } from "../constants/theme";

const StyledHeader = styled.header`
  background: ${theme.colors.primary};
  margin-bottom: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: ;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 3rem;
  white-space: nowrap;
  @media screen and (max-width: ${mq.tablet.narrow.minWidth}) {
    font-size: 85%;
  }
`;

const HeaderCointainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 1rem 1rem 1rem 0rem;
  h1 {
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderCointainer>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </HeaderCointainer>
  </StyledHeader>
);

export default Header;
