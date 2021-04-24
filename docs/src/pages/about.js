import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import { Container } from "@material-ui/core"

const About = () => (
  <Container>
    <Seo/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default About
