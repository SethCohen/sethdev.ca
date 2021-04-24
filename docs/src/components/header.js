import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h3" style={{ flex: 1 }}>
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
      <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
