import * as React from "react"

import Seo from "../components/seo"
import { Container } from "@material-ui/core"
import Header from "../components/header"

const NotFoundPage = () => (
  <>
    <Header siteTitle="// Seth Cohen" />
    <Container>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... </p>
    </Container>
  </>
)

export default NotFoundPage
