import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

export default function App() {
  return (
    <div className="App">
        <BrowserRouter forceRefresh={true}>
            <Route exact path="/sethdev.ca/" component={Homepage}/>
            <Route exact path="/sethdev.ca/portfolio" component={Portfolio}/>
            <Route exact path="/sethdev.ca/about" component={About}/>
        </BrowserRouter>
    </div>
  );
}

