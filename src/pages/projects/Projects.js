import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import ProjectList from "../../components/projectList/ProjectList";
import { ART_PROJECTS, TECH_PROJECTS } from "../../config/projectsInfo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../../components/icon/Icon";
import { Modal } from "@mui/material";

const Projects = () => {

  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectDetails) => {
    if (selectedProject && selectedProject.id === projectDetails.id) setSelectedProject(null);
    else setSelectedProject(projectDetails);
  };

  return (
    <>
      <div id={NAV_SECTIONS[2].id} className="section-wrapper projects-wrapper">
        <div className="project-list-container">
          <div className="section-title">
            {t('PROJECTS.TECH_TITLE')}
          </div>
          <div className="project-list">
            <ProjectList list={TECH_PROJECTS} handleProjectClick={handleProjectClick} selectedProject={selectedProject} />	
          </div>
        </div>
        <div className="project-list-container">
          <div className="section-title">
            {t('PROJECTS.CREATIVE_TITLE')}
          </div>
          <div className="project-list">
            <ProjectList list={ART_PROJECTS} handleProjectClick={handleProjectClick}  selectedProject={selectedProject} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {
          selectedProject &&
          <Modal
            open={selectedProject}
            onClose={()=>{setSelectedProject(null)}}
          >
          {/* <div className="modal-wrapper"> */}
            <motion.div
              className="modal-container"
              initial={{
                opacity: 0,
                scale: 0
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.3
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="modal-header">
                <div className="modal-header-cover">
                  <img src={selectedProject.coverImage} alt={`modal-project-${selectedProject.id}`} />
                  <div className="modal-header-cover-overlay"></div>
                  <div className="modal-header-info">
                    <div className="modal-header-info-title">
                      {t(selectedProject.titleKey)}
                    </div>
                    <div className="modal-header-info-tags">
                      {
                        selectedProject.tagsKey.map((tag) => {
                          return (
                            <div className="modal-header-info-tags-tag">
                              {t(tag)}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="modal-header-cover-exit-button" onClick={() => {setSelectedProject(null)}}>
                    <Icon iconName='fa-solid fa-xmark' color='var(--white)' />
                  </div>
                </div>
              </motion.div>
              <motion.div className="modal-content">
                {selectedProject.detailsComponent}
              </motion.div>
            </motion.div>
          {/* </div> */}
          </Modal>
        }
      </AnimatePresence>
    </>
  )
}

export default Projects;