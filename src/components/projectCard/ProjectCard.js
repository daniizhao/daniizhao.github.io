import { useTranslation } from "react-i18next";
import "./ProjectCard.scss";
import { motion } from "framer-motion";

const ProjectCard = (props) => {

  const { t } = useTranslation();

  return (
    <motion.div className="project-card-wrapper" whileHover={{scale: 1.025}}>
      <div className={`project-card-cover ${!props.showBottomBkg && `no-bottom`}`}>
        <img src={props.img} alt={`image_${props.projectName}`} />
      </div>
      <div className={`project-card-info ${!props.showBottomBkg && `no-bottom`}`}>
        <div className="project-card-info-name">
          {props.projectName}
        </div>
        <div className="project-card-info-description">
          {
            props.showBottomBkg && props.tags.map((tag) => {
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