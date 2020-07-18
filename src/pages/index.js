import React from "react";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";

const IndexPage = (test) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi guys!</h1>
    <p>Welcome to the Hack.Alumni website.</p>
    <p>
      We are building something great that is coming soon, so please come back
      later!
    </p>
    <div style={{ marginBottom: `1.45rem`, maxWidth: `1024px` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
