import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import TechClubFooter from "./components/Footer";
import EscapeRoom from "./components/EscapeRoom";
import DartCoding from "./components/DartCoding";
import CodeTales from "./components/CodeTales";
import BinaryBlitz from "./components/BinaryBlitz";
import ScrollToTop from "./components/ScrollToTop";
import SecretEvent from "./components/Secret";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<App />} />
                <Route path="/events/gotham-code-crusade" element={<EscapeRoom />} />
                <Route path="/events/dart-coding" element={<DartCoding />} />
                <Route path="/events/code-tales" element={<CodeTales />} />
                <Route path="/events/binary-blitz" element={<BinaryBlitz />} />
                <Route path="/events/secret-event" element={<SecretEvent />} />
            </Routes>
            <TechClubFooter clubName={"The Big O"} />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();