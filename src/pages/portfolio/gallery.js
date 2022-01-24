import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import { default as ImageGallery } from '@browniebroke/gatsby-image-gallery'
import { makeStyles } from "@mui/styles";
import Layout from "../../components/layout";

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
    <Layout>
      <Seo title="Gallery" />
      <div className={classes.padding}><ImageGallery images={images} /></div>
    </Layout>
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
              quality: 100
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