/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const StyledBody = styled.div`
    padding-top: 5rem;
    margin: 0rem auto;
    max-width: 90%;
    footer {
      font-size: 1.5rem;
      padding-bottom: 3rem;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledBody>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Incubated by
          {` `}
          <a
            href="https://hackdiversity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack.Diversity
          </a>
        </footer>
      </StyledBody>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
