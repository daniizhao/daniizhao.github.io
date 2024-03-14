import "./ProjectList.scss";
import ProjectCard from "../projectCard/ProjectCard";
import { useTranslation } from "react-i18next";

const ProjectList = (props) => {

  const { t } = useTranslation();

  return (
    <div className="project-list-wrapper">
      {
        props.list.map((item) => {
          return (
            <div key={`project-${item.id}`} className="project-card-container">
              <div onClick={() => {
                props.handleProjectClick(item);
              }}>
                <ProjectCard img={item.coverImage} projectName={t(item.titleKey)} tags={item.tagsKey}/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default ProjectList;