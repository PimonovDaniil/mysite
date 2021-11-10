
import './App.css';

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Saitbody from "./components/sitebody/Saitbody";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

function App() {
    document.title = "Пимонов Даниил";
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <Redirect from="/"  to="/about" />
                    <Route path="/about"
                           render={() => <Saitbody />}/>
                    <Route path="/projects"
                           render={() => <Projects />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
