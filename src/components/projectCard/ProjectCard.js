import { useTranslation } from "react-i18next";
import "./ProjectCard.scss";
import { motion } from "framer-motion";

const ProjectCard = (props) => {

  const { t } = useTranslation();

  return (
    <motion.div className="project-card-wrapper" whileHover={{scale: 1.025}}>
      <div className="project-card-cover">
        <img src={props.img} alt={`image_${props.projectName}`} />
      </div>
      <div className="project-card-info">
        <div className="project-card-info-name">
          {props.projectName}
        </div>
        <div className="project-card-info-description">
          {
            props.tags.map((tag) => {
              return (
                <div key={`tag-${props.projectName}-${tag}`} className="project-card-info-description-tag">
                  {t(tag)}
                </div>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  )
};

export default ProjectCard;