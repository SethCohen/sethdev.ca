import * as React from "react";
import Header from "./header";
import { Container, CssBaseline, Grow } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <>
      <Header siteTitle="// Seth Cohen" />
      <Grow in={true}>
        <Container>
          <CssBaseline />
          {children}
        </Container>
      </Grow>
    </>
  );

}