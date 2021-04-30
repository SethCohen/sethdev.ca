import * as React from "react";
import Playstore from "../assets/playstore.svg";
import Youtube from "../assets/youtube.svg";
import Github from "../assets/github.svg";
import Email from "../assets/email.svg";
import Fiverr from "../assets/fiverr.svg";
import Seo from "../components/seo";
import { Container, Grid, Grow, Tooltip } from "@material-ui/core";
import Header from "../components/header";
import "../components/svgStyle.css";


export default function Index() {

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Home" />
      <Container>

        <Grow in={true}>
          <Grid
            container
            spacing="3"
            justify="center"
            alignItems="center"
            style={{ minHeight: "70vh" }}
          >
            <Grid item>
              <Tooltip title="Email" aria-label="Email">
                <a href="mailto:sethcohen.dev@gmail.com" aria-label="Mail">
                  <Email className="email" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Github" aria-label="Github">
                <a href="https://github.com/SethCohen" aria-label="Github">
                  <Github className="github" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Playstore" aria-label="Playstore">
                <a href="https://play.google.com/store/apps/developer?id=SethCohen" aria-label="Playstore">
                  <Playstore className="playstore" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Youtube" aria-label="Youtube">
                <a href="https://www.youtube.com/channel/UCt3r8b3iDiUiQo9SdBRBgNw" aria-label="Youtube">
                  <Youtube className="youtube" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Fiverr" aria-label="Fiverr">
                <a href="https://www.fiverr.com/" aria-label="Fiverr">
                  <Fiverr className="fiverr" />
                </a>
              </Tooltip>
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
}
