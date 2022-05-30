import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import App from './App';
import NotFound from './Not-Found';

import reportWebVitals from './reportWebVitals';
import CookiesPolicy from "./Components/CookiesPolicy";

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.PUBLIC_URL);
root.render(
    <Router>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route exact path={process.env.PUBLIC_URL+"/"} element={<App/>}/>
            <Route exact path={process.env.PUBLIC_URL+"/about"} element={<App showAbout={true}/>}/>
            <Route exact path={process.env.PUBLIC_URL+"/call"} element={<App  showCall={true}/>}/>
            <Route exact path={process.env.PUBLIC_URL+"/cookies-policy"} element={<CookiesPolicy />}/>
            <Route exact path={process.env.PUBLIC_URL+"/submit"} element={<Navigate to={process.env.PUBLIC_URL+"/call"} />}/>
            <Route exact path={process.env.PUBLIC_URL+"/regulation"} element={<Navigate to={process.env.PUBLIC_URL+'/media/pcd_exhibition_brief_regulation.pdf'} />}/>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
