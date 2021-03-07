import './App.css';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

export default function App() {
  return (
    <div className="App">
        <HashRouter basename="/">
            <Route exact path="/" component={Homepage}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route exact path="/about" component={About}/>
        </HashRouter>
    </div>
  );
}

