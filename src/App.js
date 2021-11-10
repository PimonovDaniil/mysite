
import './App.css';

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Saitbody from "./components/sitebody/Saitbody";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Pult from "./components/Projectpages/3/Pult";
import Ice from "./components/Projectpages/4/Ice";

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
                    <Route path="/projects3"
                           render={() => <Pult />}/>
                    <Route path="/projects4"
                           render={() => <Ice />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
