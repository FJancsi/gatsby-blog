import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <section>
        <h1 className="heading">Well met!</h1>
      </section>
    </Layout>
  );
};

export default IndexPage;
