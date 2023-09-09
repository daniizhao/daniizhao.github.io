import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";
import CompressionImage from "../../../assets/img/compressor/compression.png";
import DecompressionImage from "../../../assets/img/compressor/decompression.png";
import ComparationImage from "../../../assets/img/compressor/comparation.png";
import ComparationTextImage from "../../../assets/img/compressor/comparationText.png";
import StatisticsImage from "../../../assets/img/compressor/globalStatistics.png";
import { useContext } from "react";
import { IsMobileSizeContext } from "../../../App";

const CompressorDetails = () => {

  const { t } = useTranslation();
  const isMobile = useContext(IsMobileSizeContext);

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail">
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.COMPRESSOR.CONTEXT')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.FEATURES')}
        </div>
        <div>
          {t('PROJECTS.COMPRESSOR.FEATURES')}
        </div>
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.SOLUTION')}
        </div>
        <div>
          {t('PROJECTS.COMPRESSOR.SOLUTION')}
        </div>
        <div className={`project-detail-${isMobile ? 'column' : 'row'}`}>
          <div>
            <img src={CompressionImage} alt="compression-img" />
          </div>
          <div>
            <img src={DecompressionImage} alt="decompression-img" />
          </div>
          <div>
            <img src={StatisticsImage} alt="statistics-img" />
          </div>
        </div>
        <div className={`project-detail-${isMobile ? 'column' : 'row'}`}>
          <div>
            <img src={ComparationImage} alt="comparation-img" />
          </div>
          <div>
            <img src={ComparationTextImage} alt="text-comparation-img" />
          </div>
        </div>
      </div>
      <div className="project-links-wrapper">
        <div className="project-links-container">
          <div className="project-links-item">
            <a href="https://github.com/daniizhao/compressor" target="_blank" rel="noreferrer">
              {t('PROJECTS.MORE_INFO.GITHUB_LINK')}
            </a> 
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
            <a href="https://www.linkedin.com/in/clara-sánchez-flaquer-007532199/" target="_blank" rel="noreferrer">
              Clara Sánchez Flaquer
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

export default CompressorDetails;