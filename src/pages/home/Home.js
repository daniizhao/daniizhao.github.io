import "./Home.scss";
import Header from "../../components/header/Header";
import TechPortrait from "../../assets/img/tech-portrait.jpg";
import SelfPortrait from "../../assets/img/self-portrait.png";
import Keyboard from "../../assets/img/keyboard.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="background-wrapper">
        <div className="background-half-container">
          <img className="bkg-tech" src={TechPortrait} alt="techImage" />
        </div>
        <div className="background-half-container">
          <img className="bkg-art" src={SelfPortrait} alt="selfPortrait" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-wrapper">

      </div>
    </div>
  )
}

export default Home;