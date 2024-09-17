import "./Portfolio.scss";
import "../home/Home.scss";
import { useTranslation } from "react-i18next";
import HeaderBack from "../../components/header/HeaderBack";
import { Tab, TabList, TabPanel, Tabs } from "../../utils/tabs.js";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer.js";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const Portfolio = (props) => {

  const { t } = useTranslation();

  return (
    <div className="portfolio-wrapper">
      <div className="background-wrapper general-bkg">
        <img src="/assets/img/Portfolio_bkg.png" alt="bkg_image" />
      </div>
      <div>
        <HeaderBack />
        <div className="portfolio-container">
          <div className="portfolio-content">
            <Tabs>
              <TabList aria-label="Portfolio">
                <Swiper
                  slidesPerView={'auto'}
                  spaceBetween={30}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Tab to="/portfolio/character">{t('PROJECTS.CATEGORIES.CHARACTER')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/creature">{t('PROJECTS.CATEGORIES.CREATURE')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/prop">{t('PROJECTS.CATEGORIES.PROP')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/environment">{t('PROJECTS.CATEGORIES.ENVIRONMENT')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/3d">{t('PROJECTS.CATEGORIES.3D')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/digital">{t('PROJECTS.CATEGORIES.DIGITAL')}</Tab>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Tab to="/portfolio/traditional">{t('PROJECTS.CATEGORIES.TRADITONAL')}</Tab>
                  </SwiperSlide>
                </Swiper>
              </TabList>
              <div className="panels">
                <TabPanel>
                  <Outlet />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Portfolio;