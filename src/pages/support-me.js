import * as React from "react";
import BuyMeACoffee from "../assets/icons/buymeacoffee.svg";
import Patreon from "../assets/icons/patreon.svg";
import GithubSponsor from "../assets/icons/githubsponsor.svg";
import Kofi from "../assets/icons/kofi.svg";
import Paypal from "../assets/icons/paypal.svg";
import Seo from "../components/seo";
import { Container, Grid, Grow, Tooltip, Typography } from "@material-ui/core";
import Header from "../components/header";
import "../components/svgStyle.css";

export default function Index() {

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Support Me" />
      <Grow in={true}>
        <Container>
          <Typography variant="h6" align="center">
            Hey! Thanks for stopping by to my support page!
            <br />
            Although I tend to make my own projects in my own personal time for free,
            <br />
            it's still always nice to know that some people find value in them.
            <br />
            <br />
            So, if you'd like to show some support, here are some various platforms you can support me through:
          </Typography>

          <Grid
            container
            spacing="3"
            justify="center"
            alignItems="center"
            style={{ minHeight: "40vh" }}
          >
            <Grid item>
              <Tooltip title="Github Sponsor" aria-label="Github Sponsor">
                <a href="https://github.com/sponsors/SethCohen" target="_blank" rel="noreferrer noopener" aria-label="Github Sponsor">
                  <GithubSponsor className="githubsponsor" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Buy Me A Coffee" aria-label="Buy Me A Coffee">
                <a href="https://www.buymeacoffee.com/SethCohen" target="_blank" rel="noreferrer noopener" aria-label="Buy Me A Coffee">
                  <BuyMeACoffee className="buymeacoffee" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Paypal" aria-label="Paypal">
                <a href="https://paypal.me/SethCohenDev" target="_blank" rel="noreferrer noopener" aria-label="Paypal">
                  <Paypal className="paypal" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Ko-Fi" aria-label="Ko-Fi">
                <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Ko-Fi">
                  <Kofi className="kofi" />
                </a>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Patreon" aria-label="Patreon">
                <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Patreon">
                  <Patreon className="patreon" />
                </a>
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
}
