import React from "react";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Seo from "../../components/seo";
import Gallery from '@browniebroke/gatsby-image-gallery'
import { Container } from "@material-ui/core";


export default function Art({ data }) {
  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.meta.originalName,
  }))

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Portfolio" />
      <Container><Gallery images={images} /></Container>
    </>
  );

}

export const query = graphql`
  query {
    allFile(filter:{relativeDirectory:{ eq: "assets/art"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            meta: fixed {
              originalName
            }
          }
        }
      }
    }
  }
`;