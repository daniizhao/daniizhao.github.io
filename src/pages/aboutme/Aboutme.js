import './Aboutme.scss';
import { NAV_SECTIONS } from '../../config/constants';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/icon/Icon';
import TimelineComponent from '../../components/timeline/Timeline';
import { moveElementHandler } from '../../utils/mouseEvents';
import { useContext, useEffect } from 'react';
import { IsMobileSizeContext } from '../../App';

const Aboutme = () => {

  const { t } = useTranslation();

  const isMobile = useContext(IsMobileSizeContext);

  useEffect(() => {
    let aboutmeSectionElement = document.querySelector('.aboutme');
    aboutmeSectionElement.addEventListener('mousemove', moveElementHandler);
    aboutmeSectionElement.moveelement = document.querySelector('#portraitImg');
  }, []);

  return (
    <div id={NAV_SECTIONS[0].id}>
      <div className="background-wrapper">
        <img id='portraitImg' src="assets/img/Portfolio_home.png" alt="bkg_image" />
        {
          isMobile &&
          <div className='bkg-overlay'></div>
        }
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
          {
            isMobile && (
              <div className='separator-container'>
                <div className='separator-line'></div>
                <div className='separator'>&</div>
                <div className='separator-line'></div>
              </div>
            )
          }
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
          <span>{t('ABOUTME.STORY.TITLE_1')}</span> {t('ABOUTME.STORY.TITLE_2')}
        </div>
        <TimelineComponent />
      </div>
    </div>
  )
}

export default Aboutme;