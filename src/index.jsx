import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import TechClubFooter from "./components/Footer";
import EscapeRoom from "./pages/pastEventPages/EscapeRoom";
import DartCoding from "./pages/pastEventPages/DartCoding";
import CodeTales from "./pages/pastEventPages/CodeTales";
import BinaryBlitz from "./pages/pastEventPages/BinaryBlitz";
import ScrollToTop from "./components/ScrollToTop";
import SecretEvent from "./pages/pastEventPages/Secret";
import PastEvents from './pages/PastEvents';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<App />} />
                <Route path="/past-events" element={<PastEvents />} />
                <Route path="/past-events/escape-room" element={<EscapeRoom />} />
                <Route path="/past-events/dart-coding" element={<DartCoding />} />
                <Route path="/past-events/code-tales" element={<CodeTales />} />
                <Route path="/past-events/binary-blitz" element={<BinaryBlitz />} />
                <Route path="/past-events/secret-event" element={<SecretEvent />} />
            </Routes>
            <TechClubFooter clubName={"The Big O"} />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();