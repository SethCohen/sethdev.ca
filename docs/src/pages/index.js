import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Playstore from "../assets/playstore.svg"
import Youtube from "../assets/youtube.svg"
import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Fiverr from "../assets/fiverr.svg"
import Seo from "../components/seo"
import { AppBar, Container, Grid, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h3" style={{ flex: 1 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              // Seth
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>
      </AppBar>
      <Seo title="Home" />
      <Container>

        <Grid
          container
          spacing="1"
          justify="center"
          alignItems="center"
          style={{ minHeight: "70vh" }}
        >
          <Grid item>
            <a href="mailto:sethcohen.dev@gmail.com"><Email fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://github.com/SethCohen"><Github fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://play.google.com/store/apps/developer?id=SethCohen"><Playstore fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCt3r8b3iDiUiQo9SdBRBgNw"><Youtube fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://www.fiverr.com/"><Fiverr fill="white" /></a>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
