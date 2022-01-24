import React from "react";
import {Link, graphql} from "gatsby";
import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Seo from "../components/seo";
import Layout from "../components/layout";

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
        paddingTop: "100%"
    },
    cardTextOverlay: {
        position: "absolute",
        bottom: "0",
        left: "0",
        top: "0",
        right: "0",
        padding: "5%",
        backgroundColor: "rgba(0,0,0,0.60)"
    }
}));

export default function Portfolio({data}) {
    const classes = useStyles();

    return (
        <Layout>
            <Seo title="Portfolio"/>
            <div className={classes.cardGrid}>
                <Grid
                    container
                    spacing={4}
                >

                    { /* Art folder */}
                    <Grid
                        item
                        xs={6} sm={6} md={4} lg={3}
                    >
                        <Link
                            to="/portfolio/gallery/"
                            style={{textDecoration: "none"}}
                        >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/8jJNtFP.png"
                                    title="Art & Designs"
                                />
                                <Box className={classes.cardTextOverlay}>
                                    <Typography variant="h5">
                                        <strong>Art & Designs</strong>
                                    </Typography>
                                </Box>
                            </Card>
                        </Link>
                    </Grid>

                    {data.allMarkdownRemark.edges.map(({node}) => {
                        if (!node.frontmatter.ignore) return (
                            <Grid
                                item
                                key={node.id}
                                xs={6} sm={6} md={4} lg={3}
                            >
                                <Link
                                    to={node.fields.slug}
                                    style={{textDecoration: "none"}}
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
                        )
                    })}
                </Grid>
            </div>
        </Layout>
    );
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
            image
            ignore
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;