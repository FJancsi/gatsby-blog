import * as React from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as styles from "./article.module.css";

const Article = ({ data }) => {
  const article = data.markdownRemark;
  return (
    <Layout>
      <Seo
        title={article.frontmatter.title}
        description={article.excerpt}
        pathname={article.fields.slug}
        article
      />
      <article className={styles.article}>
        <h1>{article.frontmatter.title}</h1>
        <div>
          by {article.frontmatter.author}. Published{" "}
          {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
        <div>
          Filed under:{" "}
          {article.frontmatter.subject.map((subject, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
              {subject}
            </Link>,
          ])}
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        subject
        author
      }
    }
  }
`;
