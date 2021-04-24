import * as React from "react"
import Seo from "../components/seo"
import { Container, Grid, Typography } from "@material-ui/core"
import Header from "../components/header"
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { FaToolbox } from "@react-icons/all-files/fa/FaToolbox"
import { FaTools } from "@react-icons/all-files/fa/FaTools"

const About = () => (
  <>
    <Header siteTitle="// Seth" />
    <Seo title="About" />
    <Container>
      <Grid
        container
        direction="column"
      >
        <Grid item>
          Freelancer since 2020
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <FaCode/>
            FTechnical Summary
          </Typography>
          <Typography variant="body1">
            Languages: Python, Java, C++, Dart, Lua, JavaScript, HTML/CSS
            <br />
            Media & Design: Photoshop, Illustrator, Premiere Pro, Clip Studio, Sony Vegas, Audacity, Lightroom, Aseprite
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <FaTools/>
            Projects
          </Typography>
          <Typography variant="body1">
            Vision Log: Dream journal Android app with dream info/type tracking and distribution visualizer.
            <br />
            Emoji Statistics Bot: Discord.py bot that tracks custom-emoji usage per server.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <FaToolbox/>
            Skillsets
          </Typography>
          <Typography variant="body1">
            App Development
            <br />
            Digital Art
            <br />
            Video Editing
            <br />
            Photo Editing
            <br />
            Web Design
          </Typography>
        </Grid>
        <Grid item>
          <i className="fas fa-graduation-cap"></i>
          <Typography variant="h6">
            <FaGraduationCap/>
            Education
          </Typography>
          <Typography variant="body1">
            Ontario Tech University - BSc (Hons) Computer Science
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </>
)

export default About
