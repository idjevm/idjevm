import React from "react";
import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";
import styled from "styled-components";

const ImageContainer = styled.div`
  margin-bottom: 1rem;
  max-width: inherit;
`;

const HomeContainer = styled.div`
  font-size: 1.5rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <h1>Hi guys!</h1>
      <p>Welcome to the Hack.Alumni website.</p>
      <p>
        We are building something great that is coming soon, so please come back
        later!
      </p>
    </HomeContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
  </Layout>
);

export default IndexPage;
