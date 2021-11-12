
import './App.css';

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Saitbody from "./components/sitebody/Saitbody";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Pult from "./components/Projectpages/Driver/Pult";
import Ice from "./components/Projectpages/Sensor/Ice";
import Arhivarius from "./components/Projectpages/Arhivarius/Arhivarius";
import Smarthome from "./components/Projectpages/Smarthome/Smarthome";
import Glonass from "./components/Projectpages/Glonass/Glonass";

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
                    <Route path="/driver"
                           render={() => <Pult />}/>
                    <Route path="/sensor"
                           render={() => <Ice />}/>
                    <Route path="/arhivarius"
                           render={() => <Arhivarius />}/>
                    <Route path="/smarthome"
                           render={() => <Smarthome />}/>
                    <Route path="/glonass"
                           render={() => <Glonass />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
