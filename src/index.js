import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import './index.css';
import App from './App';
import NotFound from './Not-Found';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route exact path={process.env.PUBLIC_URL+"/"} element={<Navigate replace to="/2022" />}/>
            <Route exact path={process.env.PUBLIC_URL+"/open-call"}/>
            <Route exact path={process.env.PUBLIC_URL+"/2022"} element={<App/>}/>
            <Route path="*" element={<NotFound/>}/>nd/>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
