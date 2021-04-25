import React from "react";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Seo from "../../components/seo";
import Gallery from '@browniebroke/gatsby-image-gallery'
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },

}));

export default function Art({ data }) {
  const classes = useStyles();

  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.meta.originalName,
  }))

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Art" />
      <Container className={classes.padding}><Gallery images={images} /></Container>
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