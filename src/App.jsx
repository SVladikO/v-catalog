import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.style.scss';

import Header from './components/header/header.component';
import CVPage from "./pages/cv/cv.component";
import GamePage from "./pages/games/game.component";
import HomePage from "./pages/home/home.component";
import PackagePage from "./pages/packages/package.component";
import Footer from "./components/footer/footer.component";
import Menu from "./components/menu/menu.component";

import {FOOTER_MENU_LINKS, ROUTE_PATH} from "./common/route";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Switch>
                    <div className="content">
                        <Route exact path={ROUTE_PATH.HOME}><HomePage/></Route>
                        <Route path={ROUTE_PATH.GAMES}><GamePage/></Route>
                        <Route path={ROUTE_PATH.PACKAGES}><PackagePage/></Route>
                        <Route path={ROUTE_PATH.CV}><CVPage/></Route>
                    </div>
                </Switch>
                <div className="bottom_bar_mobile">
                    <Menu links={FOOTER_MENU_LINKS}/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
