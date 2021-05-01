import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AppBar, Box, Grid, withStyles, Toolbar, Typography } from "@material-ui/core";
import { Button } from "gatsby-theme-material-ui";

const CustomButton = withStyles({
  root: {
    background: "-webkit-linear-gradient(0deg, #4069B2 25%, #73A7F4 75%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '&:hover': {
      background: "-webkit-linear-gradient(0deg, #4069B2 25%, #8fb8f6 75%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
})(Button);

const CustomTypography = withStyles({
  root: {
    background: "-webkit-linear-gradient(0deg, #4069B2 25%, #73A7F4 75%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '&:hover': {
      background: "-webkit-linear-gradient(0deg, #4069B2 25%, #8fb8f6 75%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
})(Typography);

const Header = ({ siteTitle }) => (
  <AppBar position="sticky" style={{ marginBottom: "2%" }}>
    <Toolbar variant="dense">
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <CustomTypography variant="h3">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </CustomTypography>
        <Box>
          <CustomButton
            disableRipple
            component={Link}
            to="/#about-me"
          >
            About
          </CustomButton>
          <CustomButton
            disableRipple
            component={Link}
            to="/support-me"
          >
            Support Me
          </CustomButton>
          <CustomButton
            disableRipple
            component={Link}
            to="/portfolio"
          >
            Portfolio
          </CustomButton>
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
