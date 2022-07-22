import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Wrapper, Content, BottomMenuMobile} from './App.style.js';

import Menu from "./components/menu/menu.component";
import Header from './components/header/header.component';
import Footer from "./components/footer/footer.component";

import CVPage from "./pages/cv/CV.page";
import HomePage from "./pages/home/Home.page";
import PackagePage from "./pages/packages/Package.page";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
import WebsiteCatalogPage from "./pages/website-catalog/Website-catalog.page";
import IncomeCalculatorPage from "./pages/income-calculator/IncomeCalculator.page";

import {FOOTER_MENU_LINKS, ROUTE_PATH, QUERY_PARAMS} from "./common/route";

import {searchParams} from './common/location.js'

function App() {

  const params = searchParams();
  const isHideMenu = params.has(QUERY_PARAMS.HIDE_HEADER);

  return (
    <Router>
      <Wrapper>
        {isHideMenu ? null : <Header/>}
        <Switch>
           <Content>
             <Route exact path={ROUTE_PATH.HOME}><HomePage/></Route>
             <Route path={ROUTE_PATH.WEBSITES_CATALOG}><WebsiteCatalogPage/></Route>
             <Route path={ROUTE_PATH.PACKAGES}><PackagePage/></Route>
             <Route path={ROUTE_PATH.CV}><CVPage/></Route>
             <Route path={ROUTE_PATH.TIME_TABLE_F}><TimetableFPage/></Route>
             <Route path={ROUTE_PATH.INCOME_CALCULATOR}><IncomeCalculatorPage/></Route>
           </Content>
         </Switch>
        {isHideMenu
            ? null
            : <BottomMenuMobile>
                <Menu links={FOOTER_MENU_LINKS}/>
              </BottomMenuMobile>
        }
        <Footer/>
      </Wrapper>
    </Router>
  );
}

export default App;
