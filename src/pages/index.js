import * as React from "react"
import Playstore from "../assets/playstore.svg"
import Youtube from "../assets/youtube.svg"
import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Fiverr from "../assets/fiverr.svg"
import Seo from "../components/seo"
import { Container, Grid} from "@material-ui/core"
import Header from "../components/header"

export default function Index() {

  return (
    <>
      <Header siteTitle="// Seth Cohen"/>
      <Seo title="Home" />
      <Container>

        <Grid
          container
          spacing="3"
          justify="center"
          alignItems="center"
          style={{ minHeight: "70vh" }}
        >
          <Grid item>
            <a href="mailto:sethcohen.dev@gmail.com" aria-label="Mail"><Email fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://github.com/SethCohen" aria-label="Github"><Github fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://play.google.com/store/apps/developer?id=SethCohen" aria-label="Playstore"><Playstore fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCt3r8b3iDiUiQo9SdBRBgNw" aria-label="Youtube"><Youtube fill="white" /></a>
          </Grid>
          <Grid item>
            <a href="https://www.fiverr.com/" aria-label="Fiverr"><Fiverr fill="white" /></a>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
