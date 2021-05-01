import * as React from "react";
import Playstore from "../assets/icons/playstore.svg";
import Youtube from "../assets/icons/youtube.svg";
import Github from "../assets/icons/github.svg";
import Email from "../assets/icons/email.svg";
import Fiverr from "../assets/icons/fiverr.svg";
import About from "../assets/icons/about.svg";
import Seo from "../components/seo";
import { Box, Container, Grid, Grow, Tooltip, Typography } from "@material-ui/core";
import Header from "../components/header";
import "../components/svgStyle.css";


export default function Index() {

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Home" />
      <Grow in={true}>
        <Container style={{ overflow: "hidden" }}>
          <Grid
            container
            spacing="3"
            justify="center"
            alignItems="center"
            style={{ minHeight: "70vh" }}
          >
            <Grid item>
              <Tooltip title="About Me" aria-label="About Me">
                <a href="#about-me" >
                  <About className="about" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Email" aria-label="Email">
                <a href="mailto:sethcohen.dev@gmail.com" aria-label="Mail">
                  <Email className="email" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Github" aria-label="Github">
                <a href="https://github.com/SethCohen" target="_blank" rel="noreferrer noopener" aria-label="Github">
                  <Github className="github" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Playstore" aria-label="Playstore">
                <a href="https://play.google.com/store/apps/developer?id=SethCohen" target="_blank"
                   rel="noreferrer noopener" aria-label="Playstore">
                  <Playstore className="playstore" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Youtube" aria-label="Youtube">
                <a href="https://www.youtube.com/channel/UCt3r8b3iDiUiQo9SdBRBgNw" target="_blank"
                   rel="noreferrer noopener" aria-label="Youtube">
                  <Youtube className="youtube" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Fiverr (WIP)" aria-label="Fiverr">
                <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Fiverr">
                  <Fiverr className="fiverr" />
                </a>
              </Tooltip>
            </Grid>
          </Grid>
          <Box style={{ minHeight: "30vh" }}></Box>
          <Box style={{ minHeight: "80vh" }}>
            <Typography align="center" variant="h4" id="about-me">
              Hi, I'm Seth! 🍵
              <br /><br />
              I'm a freelancer and passionate hobbyist for creating various apps & software as well as a bit of digital
              art on the side. I like to follow a DIY ideology and learn new skills to accomplish whatever ideas that
              pop into my head.
              <br /><br />
              My Tech Stack:
              <br />
            </Typography>
            <Typography align="center" variant="h5">
              Python, Java, Javascript, HTML/CSS, Dart, Lua, C++, Markdown,
              <br />
              React, Gatsby, Material UI, Flutter,
              <br />
              Aseprite, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects,
              <br />
              PyCharm, IntelliJ, Webstorm, Android Studio,
              <br />
              Firebase, SQLite
            </Typography>

          </Box>
        </Container>
      </Grow>
    </>
  );
}
