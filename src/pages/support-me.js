import * as React from "react";
import BuyMeACoffee from "../assets/buymeacoffee.svg";
import Patreon from "../assets/patreon.svg";
import GithubSponsor from "../assets/githubsponsor.svg";
import Kofi from "../assets/kofi.svg";
import Paypal from "../assets/paypal.svg";
import Seo from "../components/seo";
import { Container, Grid, Grow, Tooltip, Typography } from "@material-ui/core";
import Header from "../components/header";

export default function Index() {

  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Seo title="Support Me" />
      <Container>

        <Grow in={true}>
          <Grid
            container
            spacing="5"
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "60vh" }}
          >
            <Grid item>
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
            </Grid>

            <Grid
              container
              spacing="3"
              justify="center"
              alignItems="center"
              direction="row"
            >
              <Grid item>
                <Tooltip title="Github Sponsor" aria-label="Github Sponsor">
                  <a href="https://github.com/sponsors/SethCohen" aria-label="Github Sponsor"><GithubSponsor /></a>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Buy Me A Coffee" aria-label="Buy Me A Coffee">
                  <a href="https://www.buymeacoffee.com/SethCohen" aria-label="Buy Me A Coffee"><BuyMeACoffee /></a>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Paypal" aria-label="Paypal">
                  <a href="https://paypal.me/SethCohenDev" aria-label="Paypal"><Paypal /></a>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Ko-Fi" aria-label="Ko-Fi">
                  <a href="#" aria-label="Ko-Fi"><Kofi /></a>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Patreon" aria-label="Patreon">
                  <a href="#" aria-label="Patreon"><Patreon /></a>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
}
