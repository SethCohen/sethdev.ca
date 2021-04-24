import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Typography } from "@material-ui/core";
import Header from "../components/header";
import Seo from "../components/seo";

export default function Portfolio({ data }) {
  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Portfolio" />
      <Container>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}>
              <Typography variant="h5">
                {node.frontmatter.title}{" — "}{node.frontmatter.date}
              </Typography>
            </Link>
          </div>
        ))}
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`