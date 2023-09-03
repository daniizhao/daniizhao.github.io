import './Aboutme.scss';
import PortraitBkg from "../../assets/img/Portfolio_home.png";
import { NAV_SECTIONS } from '../../config/constants';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/icon/Icon';
import TimelineComponent from '../../components/timeline/Timeline';

const Aboutme = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[0].id}>
      <div className="background-wrapper">
        <img className="bkg-tech" src={PortraitBkg} alt="bkg_image" />
      </div>
      <div className="section-wrapper aboutme">
        <div className="title">
          {t("HOME.INTRODUCTION.HEY")}
        </div>
        <div className="intro-wrapper">
          <div className="intro-container">
            <div className='title tech'>
              Daniela Zhao
            </div>
            <div className='role'>
              {t('HOME.INTRODUCTION.DEV')}
            </div>
          </div>
          <div className="intro-container">
            <div className='title art'>
              nydalae
            </div>
            <div className='role'>
              {t('HOME.INTRODUCTION.CONCEPT')}
            </div>
          </div>
        </div>
        <div className='intro-footer'>
          <div className='text'>
            {t('HOME.INTRODUCTION.SCROLL')}
          </div>
          <div className='icon-container'>
            <Icon iconName='fa-solid fa-angles-down' color='var(--white)' animation='fa-bounce' />
          </div>
        </div>
      </div>
      <div className='section-wrapper timeline'>
        <div className='section-title'>
          {t('ABOUTME.STORY.TITLE')}
        </div>
        <TimelineComponent />
      </div>
    </div>
  )
}

export default Aboutme;