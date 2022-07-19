import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

import './App.style.scss';
import {AppContent, BottomMenuMobile} from './App.style.js';

import Header from './components/header/header.component';
import CVPage from "./pages/cv/cv.component";
import WebsiteCatalogPage from "./pages/website-catalog/website-catalog.component";
import HomePage from "./pages/home/home.component";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
import SalaryCalcPage from "./pages/salaryCalc/SalaryCalc.page";
import PackagePage from "./pages/packages/Package.page";
import Footer from "./components/footer/footer.component";
import Menu from "./components/menu/menu.component";

import {FOOTER_MENU_LINKS, ROUTE_PATH, QUERY_PARAMS} from "./common/route";

import {searchParams} from './common/location.js'

function App() {

  const params = searchParams();
  const isHideHeader = params.has(QUERY_PARAMS.HIDE_HEADER);
  const isHideFooter = params.has(QUERY_PARAMS.HIDE_FOOTER);

  return (
    <BrowserRouter>
      <div className="app">
        {isHideHeader ? null : <Header/>}
        <AppContent>
          <Routes>
            <Route exact path={ROUTE_PATH.HOME} element={<HomePage/>} />
            <Route path={ROUTE_PATH.WEBSITES_CATALOG}element={<WebsiteCatalogPage/>} />
            <Route path={ROUTE_PATH.PACKAGES} element={<PackagePage/>} />
            <Route path={ROUTE_PATH.CV} element={<CVPage/>} />
            <Route path={ROUTE_PATH.TIME_TABLE_F} element={<TimetableFPage/>} />
            <Route path={ROUTE_PATH.SALARY_CALC} element={<SalaryCalcPage/>} />
          </Routes>
        </AppContent>
        {isHideFooter
            ? null
            : <BottomMenuMobile>
                <Menu links={FOOTER_MENU_LINKS}/>
              </BottomMenuMobile>
        }
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
