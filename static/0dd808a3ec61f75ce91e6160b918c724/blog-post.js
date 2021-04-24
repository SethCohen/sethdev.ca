import React from "react";
import { graphql } from "gatsby";
import { Container } from "@material-ui/core";
import Header from "../components/header";
import Seo from "../components/seo";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title={post.frontmatter.title} />
      <Container>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;