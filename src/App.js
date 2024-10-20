
import './App.css';
import TechClubHero from "./Intro";
import Announce from "./Announce";
import logo from './assets/logo.jpg';
import TechClubFooter from "./Footer";
import EventCards from "./Events";

function App() {
  return (
    <>
        <TechClubHero
            clubName="TheBigO"
            introduction="We are a vibrant community of tech enthusiasts, innovators, and learners. Our mission is to foster creativity, encourage collaboration, and develop cutting-edge skills in technology. Join us to explore the latest tech trends, participate in exciting projects, and shape the future of innovation."
            logoUrl={logo} />
      <Announce />
        <EventCards />
        <TechClubFooter clubName={"TheBigO"} />
    </>
  );
}

export default App;
