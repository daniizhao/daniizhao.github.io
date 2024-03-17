import "./Projects.scss";
import "../home/Home.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import ProjectList from "../../components/projectList/ProjectList";
import { TECH_PROJECTS } from "../../config/projectsInfo";

import HeaderBack from "../../components/header/HeaderBack";
import Footer from "../../components/footer/Footer";

const Projects = () => {

  const { t } = useTranslation();

  return (
    <div className="project-content">
      <div>
        <HeaderBack />
        <div className="background-wrapper general-bkg">
          <img src="/assets/img/Portfolio_bkg.png" alt="bkg_image" />
        </div>
        <div id={NAV_SECTIONS[2].id} className="section-wrapper projects-wrapper">
          <div className="project-list-container">
            <ProjectList list={TECH_PROJECTS} showBottomBkg={true} />	
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects;