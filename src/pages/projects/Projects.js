import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";

const Projects = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[2].id}>
      <h1>{t('PROJECTS.TITLE')}</h1>
    </div>
  )
}

export default Projects;