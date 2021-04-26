import React from "react";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Seo from "../../components/seo";
import { default as ImageGallery } from '@browniebroke/gatsby-image-gallery'
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },

}));

export default function Gallery({ data }) {
  const classes = useStyles();

  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.meta.originalName,
  }))

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Gallery" />
      <Container className={classes.padding}><ImageGallery images={images} /></Container>
    </>
  );

}

export const query = graphql`
  query {
    allFile(filter:{relativeDirectory:{ eq: "assets/gallery"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
            )
            meta: fixed {
              originalName
            }
          }
        }
      }
    }
  }
`;