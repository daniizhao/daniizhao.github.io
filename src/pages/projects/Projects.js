import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import ProjectList from "../../components/projectList/ProjectList";
import { ART_PROJECTS, TECH_PROJECTS } from "../../config/projectsInfo";

const Projects = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[2].id} className="section-wrapper projects-wrapper">
      <div className="project-list-container">
        <div className="section-title">
          {t('PROJECTS.TECH_TITLE')}
        </div>
        <div className="project-list">
          <ProjectList list={TECH_PROJECTS} />
        </div>
      </div>
      <div className="project-list-container">
        <div className="section-title">
          {t('PROJECTS.CREATIVE_TITLE')}
        </div>
        <div className="project-list">
          <ProjectList list={ART_PROJECTS} />
        </div>
      </div>
    </div>
  )
}

export default Projects;