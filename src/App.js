import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import { ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="App">
              <BrowserRouter forceRefresh="true">
                  <Route exact path="/sethdev.ca/" component={Homepage}/>
                  <Route path="/sethdev.ca/portfolio" component={Portfolio}/>
                  <Route path="/sethdev.ca/about" component={About}/>
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

