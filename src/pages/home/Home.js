import "./Home.scss";
import Header from "../../components/header/Header";
import TechPortrait from "../../assets/img/tech-portrait.jpg";
import SelfPortrait from "../../assets/img/self-portrait.png";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

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
        <div className="title">
          {t("HOME.INTRODUCTION.HEY")}
        </div>
        <div className="content-container">
          Daniela Zhao
        </div>
      </div>
    </div>
  )
}

export default Home;