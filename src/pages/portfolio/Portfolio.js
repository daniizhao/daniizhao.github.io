import "./Portfolio.scss";
import "../home/Home.scss";
import { useTranslation } from "react-i18next";
import HeaderBack from "../../components/header/HeaderBack";
import { Tab, TabList, TabPanel, Tabs } from "../../utils/tabs.js";
import { Outlet } from "react-router-dom";

const Portfolio = (props) => {

  const { t } = useTranslation();

  return (
    <>
      <HeaderBack />
      <div className="background-wrapper general-bkg">
        <img src="/assets/img/Portfolio_bkg.png" alt="bkg_image" />
      </div>
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <Tabs>
            <TabList aria-label="Portfolio">
              <Tab to="/portfolio/character">{t('PROJECTS.CATEGORIES.CHARACTER')}</Tab>
              <Tab to="/portfolio/creature">{t('PROJECTS.CATEGORIES.CREATURE')}</Tab>
              <Tab to="/portfolio/prop">{t('PROJECTS.CATEGORIES.PROP')}</Tab>
              <Tab to="/portfolio/environment">{t('PROJECTS.CATEGORIES.ENVIRONMENT')}</Tab>
              <Tab to="/portfolio/3d">{t('PROJECTS.CATEGORIES.3D')}</Tab>
              <Tab to="/portfolio/traditional">{t('PROJECTS.CATEGORIES.TRADITONAL')}</Tab>
              <Tab to="/portfolio/digital">{t('PROJECTS.CATEGORIES.DIGITAL')}</Tab>
            </TabList>
            <div className="panels">
              <TabPanel>
                <Outlet />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  )
};

export default Portfolio;