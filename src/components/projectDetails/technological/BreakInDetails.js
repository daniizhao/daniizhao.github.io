import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";

const BreakInDetails = () => {

  const { t } = useTranslation();

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail">
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.BREAKIN.CONTEXT')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.SOLUTION')}
        </div>
        <div>
          {t('PROJECTS.BREAKIN.SOLUTION')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.DEMO')}
        </div>
        <div className="project-detail-embed-video">
          <iframe src="https://www.youtube.com/embed/0BtZWmPCz8Y?si=Od8js2b2mloDCzkl" title="Nook Break In Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className="project-links-wrapper">
        <div className="project-links-container">
          <div className="project-links-item">
            <a href="https://www.mobygames.com/game/25450/break-in/" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.ORIGINAL')}
            </a> 
          </div>
          <div className="project-links-item">
            <a href="https://github.com/daniizhao/break-in" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.GITHUB_LINK')}
            </a> 
          </div>
          <div className="project-links-item">
            <a href="https://www.youtube.com/watch?v=0BtZWmPCz8Y" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.YOUTUBE_LINK')}
            </a> 
          </div>
        </div>
        <div className="project-links-container">
          <div className="project-detail-title">
            {t('PROJECTS.SECTIONS.STACK')}
          </div>
          <div className="project-links-column">
            <div>
              Visual Studio
            </div>
            <div>
              OpenGL
            </div>
            <div>
              C++
            </div>
            <div>
              Aseprite
            </div>
          </div>
        </div>
        <div className="project-links-container">
          <div className="project-detail-title">
            {t('PROJECTS.SECTIONS.CONTRIBUTORS')}
          </div>
          <div className="project-links-column">
            <a href="https://joanbosch.dev" target="_blank" rel="noreferrer">
              Joan Bosch Pons
            </a>
            <div>
              Daniela Zhao
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BreakInDetails;