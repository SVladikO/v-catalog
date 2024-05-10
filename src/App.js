import React from "react";
import {Routes, Route} from "react-router-dom";

import {Wrapper, Content, BottomMenuMobile} from './App.style.js';


import Header from './components/Header/Header.component';
import Footer from "./components/footer/footer.component";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.component";

import {FOOTER_MENU_LINKS, ROUTE_PATH} from "./common/route";

import CVPage from "./pages/cv/CV.page";
import HomePage from "./pages/home/Home.page";
import PackagePage from "./pages/packages/Package.page";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
import WebsiteCatalogPage from "./pages/website-catalog/Website-catalog.page";
import EnglishAlphabetPage from "./pages/english-alphabet/EnglishAlphabet.page";
import IncomeCalculatorPage from "./pages/income-calculator/IncomeCalculator.page";

export default function App() {
    return (
        <Wrapper>
            {<Header/>}
            <Content>
                <Routes>
                    <Route exact path={ROUTE_PATH.HOME} element={<WebsiteCatalogPage/>}/>
                    <Route path={ROUTE_PATH.AUTHOR} element={<HomePage/>}/>
                    <Route path={ROUTE_PATH.PACKAGES} element={<PackagePage/>}/>
                    <Route path={ROUTE_PATH.CV} element={<CVPage/>}/>

                    <Route path={ROUTE_PATH.TIME_TABLE_F} element={<TimetableFPage/>}/>
                    <Route path={ROUTE_PATH.INCOME_CALCULATOR} element={<IncomeCalculatorPage/>}/>
                    <Route path={ROUTE_PATH.ENGLISH_ALPHABET} element={<EnglishAlphabetPage/>}/>
                </Routes>
                <Footer/>
            </Content>
        </Wrapper>
    );
}
