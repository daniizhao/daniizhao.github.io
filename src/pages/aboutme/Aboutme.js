import './Aboutme.scss';
import PortraitBkg from "../../assets/img/Portfolio_home.png";
import { NAV_SECTIONS } from '../../config/constants';
import { useTranslation } from 'react-i18next';

const Aboutme = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[0].id}>
      <div className="background-wrapper">
        <img className="bkg-tech" src={PortraitBkg} alt="bkg_image" />
      </div>
      <div className="section-wrapper">
        <div className="title">
          {t("HOME.INTRODUCTION.HEY")}
        </div>
        <div className="intro-wrapper">
          <div className="intro-container">
            Daniela Zhao
          </div>
          <div className="intro-container">
            nydalae
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme;