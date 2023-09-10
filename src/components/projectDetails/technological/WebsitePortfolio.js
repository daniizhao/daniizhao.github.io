import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";

const PortfolioDetails = () => {

  const { t } = useTranslation();
  
  return (
    <div className="project-detail-wrapper">
      <div className="project-detail">
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.PORTFOLIO.CONTEXT')}
        </div>
        <div className="project-detail-column">
          <a href="https://iuri.is" target="_blank" rel="noreferrer">
            - Iuri de Paula, creative frontend developer
          </a>
          <a href="https://yasio.dev" target="_blank" rel="noreferrer">
            - Yasio, designer & developer
          </a>
          <a href="https://www.adhamdannaway.com" target="_blank" rel="noreferrer">
            - Adam Dannaway, product designer
          </a>
          <a href="https://www.behance.net/gallery/163395333/Illustrator-Portfolio" target="_blank" rel="noreferrer">
            - Caitlin Gwyneth, Illustrator
          </a>
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.SOLUTION')}
        </div>
        <div className="project-detail-column">
          <div>
            {t('PROJECTS.PORTFOLIO.SOLUTION_1')}
          </div>
          <div>
            <img src="assets/img/potfolio/colors.png" alt="website_color_palette" />
          </div>
        </div>
        <div className="project-detail-column">
          <div>
            {t('PROJECTS.PORTFOLIO.SOLUTION_2')}
          </div>
          <div className="project-detail-row">
            <div>
              <img src="assets/img/potfolio/first-idea.png" alt="first_idea" />
            </div>
            <div>
              <img src="assets/img/potfolio/second-idea.png" alt="second_idea" />
            </div>
          </div>
        </div>
        <div className="project-detail-column">
          <div>
            {t('PROJECTS.PORTFOLIO.SOLUTION_3')}
          </div>
          <div className="project-detail-row">
            <div>
              <img src="assets/img/potfolio/structure.png" alt="final_structure" />
            </div>
            <div>
              <img src="assets/img/potfolio/FinalWebsite.png" alt="final_result" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-links-wrapper">
        <div className="project-links-container">
          <div className="project-links-item">
            <a href="https://github.com/daniizhao/daniizhao.github.io" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.GITHUB_LINK')}
            </a> 
          </div>
        </div>
        <div className="project-links-container">
          <div className="project-detail-title">
            {t('PROJECTS.SECTIONS.STACK')}
          </div>
          <div className="project-links-column">
            <div>
              ReactJS
            </div>
            <div>
              Figma
            </div>
            <div>
              Procreate 
            </div>
          </div>
        </div>
        <div className="project-links-container">
          <div className="project-detail-title">
            {t('PROJECTS.SECTIONS.CONTRIBUTORS')}
          </div>
          <div className="project-links-column">
            <div>
              Daniela Zhao
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PortfolioDetails;