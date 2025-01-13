import React from "react";
import {Routes, Route} from "react-router-dom";

import {Wrapper, Content} from './App.style.js';


import HomePage from "./pages/home/Home.page";
// import PackagePage from "./pages/packages/Package.page";
import TimetableFPage from "./pages/timetabeF/TimetableF.page";
// import WebsiteCatalogPage from "./pages/website-catalog/Website-catalog.page";
import EnglishAlphabetPage from "./pages/english-alphabet/EnglishAlphabet.page";
import IncomeCalculatorPage from "./pages/income-calculator/income-calculator.page";
import Header from "./components/header/header";

export default function App() {
    return (
        <>
            <Header/>
            <Wrapper>
                <Content>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path='/income-calculator' element={<IncomeCalculatorPage/>}/>
                        {/*<Route path={ROUTE_PATH.PACKAGES} element={<PackagePage/>}/>*/}
                        {/*<Route exact path={ROUTE_PATH.PROJECTS} element={<WebsiteCatalogPage/>}/>*/}
                        <Route path="/t" element={<TimetableFPage/>}/>
                        <Route path="/english-alphabet-spelling" element={<EnglishAlphabetPage/>}/>
                    </Routes>
                </Content>
            </Wrapper>
        </>
    );
}
