import React from "react";
import { Link, graphql } from "gatsby";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import Header from "../../components/header";
import Seo from "../../components/seo";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    position: "relative"
  },
  cardMedia: {
    height: "0px",
    paddingTop: "100%",
  },
  cardTextOverlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    top: "0",
    right: "0",
    padding: "5%",
    backgroundColor: "rgba(0,0,0,0.60)"
  },
}));

export default function Portfolio({ data }) {
  const classes = useStyles();

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Programming" />
      <Container className={classes.cardGrid}>
        <Grid
          container
          spacing={4}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Grid
              item
              key={node.id}
              xs={6} sm={6} md={4} lg={3}
            >
              <Link
                to={node.fields.slug}
                style={{ textDecoration: "none" }}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={node.frontmatter.image}
                    title={node.frontmatter.title}
                  />
                  <Box className={classes.cardTextOverlay}>
                    <Typography variant="h5">
                      <strong>{node.frontmatter.title}</strong>
                    </Typography>
                    <Typography variant="subtitle2">
                      {node.frontmatter.date}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(programming)/"  }}, 
    sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;