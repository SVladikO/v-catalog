import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.style.scss';
import {AppContent, BottomMenuMobile} from './App.style.js';

import Header from './components/header/header.component';
import CVPage from "./pages/cv/cv.component";
import WebsiteCatalogPage from "./pages/website-catalog/website-catalog.component";
import HomePage from "./pages/home/home.component";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
import IncomeCalculatorPage from "./pages/income-calculator/IncomeCalculator.page";
import PackagePage from "./pages/packages/Package.page";
import Footer from "./components/footer/footer.component";
import Menu from "./components/menu/menu.component";

import {FOOTER_MENU_LINKS, ROUTE_PATH, QUERY_PARAMS} from "./common/route";

import {searchParams} from './common/location.js'

function App() {

  const params = searchParams();
  const isHideMenu = params.has(QUERY_PARAMS.HIDE_HEADER);

  return (
    <Router>
      <div className="app">
        {isHideHeader ? null : <Header/>}
        <Switch>
           <AppContent>
             <Route exact path={ROUTE_PATH.HOME}><HomePage/></Route>
             <Route path={ROUTE_PATH.WEBSITES_CATALOG}><WebsiteCatalogPage/></Route>
             <Route path={ROUTE_PATH.PACKAGES}><PackagePage/></Route>
             <Route path={ROUTE_PATH.CV}><CVPage/></Route>
             <Route path={ROUTE_PATH.TIME_TABLE_F}><TimetableFPage/></Route>
             <Route path={ROUTE_PATH.INCOME_CALCULATOR}><IncomeCalculatorPage/></Route>
           </AppContent>
         </Switch>
        {isHideMenu
            ? null
            : <BottomMenuMobile>
                <Menu links={FOOTER_MENU_LINKS}/>
              </BottomMenuMobile>
        }
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
