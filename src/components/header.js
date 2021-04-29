import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AppBar, Box, Grid, Toolbar, Typography } from "@material-ui/core";
import { Button } from "gatsby-theme-material-ui";

const Header = ({ siteTitle }) => (
  <AppBar position="static" style={{ marginBottom: "2%" }}>
    <Toolbar variant="dense">
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h3" style={{
          background: "-webkit-linear-gradient(0deg, #4069B2 25%, #73A7F4 75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
        <Box>
          <Button
            disableRipple
            style={{
              background: "-webkit-linear-gradient(0deg, #4069B2 15%, #73A7F4 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            component={Link}
            to="/support-me"
          >
            Support Me
          </Button>
          <Button
            disableRipple
            style={{
              background: "-webkit-linear-gradient(0deg, #4069B2 15%, #73A7F4 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            component={Link}
            to="/portfolio"
          >
            Portfolio
          </Button>
        </Box>
      </Grid>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
