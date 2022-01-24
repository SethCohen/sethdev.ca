import * as React from "react";
import Playstore from "../assets/icons/playstore.svg";
import Youtube from "../assets/icons/youtube.svg";
import Github from "../assets/icons/github.svg";
import Email from "../assets/icons/email.svg";
import Fiverr from "../assets/icons/fiverr.svg";
import About from "../assets/icons/about.svg";
import Seo from "../components/seo";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import "../components/svgStyle.css";
import Layout from "../components/layout";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Index() {

  return (
    <Layout>
      <Seo title="Home" />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        <Grid item>
          <Tooltip title="About Me" aria-label="About Me">
            <button
              aria-label="About Me"
              onClick={() => scrollTo('#about-me')}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                margin: 0,
                padding: 0,
              }}
            >
              <About className="about"/>
            </button>
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
          <Tooltip title="Fiverr" aria-label="Fiverr">
            <a href="https://www.fiverr.com/sethcohendev" target="_blank" rel="noreferrer noopener" aria-label="Fiverr">
              <Fiverr className="fiverr" />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
      <Box style={{ minHeight: "30vh" }}></Box>
      <Box style={{ minHeight: "80vh" }}>
        <Typography align="center" variant="h4" id="about-me">
          Hi, I'm Seth! <span role="img" aria-label="tea-emoji">🍵</span>
          <br /><br />
          I'm a freelancer and hobbyist who's passionate towards creating various apps, software, digital art, and graphic
          designs. I love to learn any new skills to help accomplish whatever ideas & goals that pop into my head.
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
    </Layout>
  );
}
