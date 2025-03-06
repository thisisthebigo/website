import React from 'react';
import './App.css';
import TechClubHero from "./components/Intro";
import Announce from "./components/Announce";
import logo from './assets/logo.jpg';
import Events from "./components/Events";

function App() {
  return (
    <>
        <TechClubHero
            clubName="The Big O"
            introduction="We are a vibrant community of tech enthusiasts, innovators, and learners. Our mission is to foster creativity, encourage collaboration, and develop cutting-edge skills in technology. Join us to explore the latest tech trends, participate in exciting projects, and shape the future of innovation."
            logoUrl={logo} />
      <Announce />

        <Events />
    </>
  );
}

export default App;
