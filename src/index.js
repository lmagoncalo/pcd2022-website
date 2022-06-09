import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import App from './App';
import NotFound from './Not-Found';

import reportWebVitals from './reportWebVitals';
import CookiesPolicy from "./Components/CookiesPolicy";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router basename="/2022">
        <Routes>
            <Route path={"/about"} element={<App showAbout={true}/>}/>
            <Route path={"/call"} element={<App  showCall={true}/>}/>
            <Route path={"/cookies-policy"} element={<CookiesPolicy />}/>
            <Route path={"/submit"} element={<Navigate to={"/call"} />}/>
            <Route path={"/regulation"} element={<Navigate to={'/media/pcd_exhibition_brief_regulation.pdf'} />}/>
            <Route path={"/"} element={<App/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
