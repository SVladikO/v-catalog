import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Wrapper, Content, BottomMenuMobile} from './App.style.js';

import Header from './components/header/header.component';
import Footer from "./components/footer/footer.component";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.component";

import CVPage from "./pages/cv/CV.page";
import HomePage from "./pages/home/Home.page";
import PackagePage from "./pages/packages/Package.page";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
import WebsiteCatalogPage from "./pages/website-catalog/Website-catalog.page";
import EnglishAlphabetPage from "./pages/english-alphabet/EnglishAlphabet.page";
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
             <Route exact path={ROUTE_PATH.HOME}><WebsiteCatalogPage/></Route>
             <Route path={ROUTE_PATH.AUTHOR}><HomePage/></Route>
             <Route path={ROUTE_PATH.PACKAGES}><PackagePage/></Route>
             <Route path={ROUTE_PATH.CV}><CVPage/></Route>
             <Route path={ROUTE_PATH.TIME_TABLE_F}><TimetableFPage/></Route>
             <Route path={ROUTE_PATH.INCOME_CALCULATOR}><IncomeCalculatorPage/></Route>
             <Route path={ROUTE_PATH.ENGLISH_ALPHABET}><EnglishAlphabetPage/></Route>
           </Content>
         </Switch>
        {isHideMenu
            ? null
            : <BottomMenuMobile>
                <NavigationMenu links={FOOTER_MENU_LINKS}/>
              </BottomMenuMobile>
        }
        <Footer/>
      </Wrapper>
    </Router>
  );
}

export default App;
