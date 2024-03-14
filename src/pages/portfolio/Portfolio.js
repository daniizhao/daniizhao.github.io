import "./Portfolio.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import ProjectList from "../../components/projectList/ProjectList";
import { ART_PROJECTS } from "../../config/projectsInfo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../../components/icon/Icon";
import { Modal, Tab } from "@mui/material";
import HeaderBack from "../../components/header/HeaderBack";

const Portfolio = (props) => {

  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (props.tab != null) setSelectedTab(props.tab);
  }, [props.tab]);

  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectDetails) => {
    if (selectedProject && selectedProject.id === projectDetails.id) setSelectedProject(null);
    else setSelectedProject(projectDetails);
  };

  return (
    <>
      <HeaderBack />
      {/* <div id={NAV_SECTIONS[2].id} className="section-wrapper projects-wrapper">
        <div className="project-list-container">
          <div className="project-list">
            <ProjectList list={ART_PROJECTS} handleProjectClick={handleProjectClick} selectedProject={selectedProject} />	
          </div>
        </div>
      </div> */}
      <AnimatePresence>
        {
          selectedProject &&
          <Modal
            open={selectedProject != null}
            onClose={()=>{setSelectedProject(null)}}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          >
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
                        selectedProject.tagsKey.map((tag, i) => {
                          return (
                            <div key={`modal-${selectedProject.id}-header-tag-${i}`} className="modal-header-info-tags-tag">
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
          </Modal>
        }
      </AnimatePresence>
    </>
  )
};

export default Portfolio;