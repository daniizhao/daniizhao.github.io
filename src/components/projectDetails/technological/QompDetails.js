import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";

const QompDetails = () => {

  const { t } = useTranslation();

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail">
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.QOMP.CONTEXT')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.SOLUTION')}
        </div>
        <div>
          {t('PROJECTS.QOMP.SOLUTION')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.DEMO')}
        </div>
        <div className="project-detail-embed-video">
          <iframe src="https://www.youtube.com/embed/13K_3HzZxrc?si=Ol0bc_dkLuyaoePH" title="Qomp Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className="project-links-wrapper">
        <div className="project-links-container">
          <div className="project-links-item">
            <a href="https://store.steampowered.com/app/1066900/qomp/" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.ORIGINAL')}
            </a> 
          </div>
          <div className="project-links-item">
            <a href="https://github.com/daniizhao/qomp" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.GITHUB_LINK')}
            </a> 
          </div>
          <div className="project-links-item">
            <a href="https://www.youtube.com/watch?v=13K_3HzZxrc" target="_blank" rel="noreferrer">
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
              Unity
            </div>
            <div>
              C#
            </div>
            <div>
              MagicaVoxel & Blender
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
              Joan Salvador Magrans
            </div>
            <div>
              Daniela Zhao
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default QompDetails;