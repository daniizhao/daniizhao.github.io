import "./ProjectList.scss";
import ProjectCard from "../projectCard/ProjectCard";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectList = (props) => {

  const { t } = useTranslation();

  return (
    <Swiper
      slidesPerView='auto'
    >
      {
        props.list.map((item) => {
          return (
            <SwiperSlide key={`project-${item.id}`} >
              <div onClick={() => {
                props.handleProjectClick(item);
              }}>
                <ProjectCard img={item.coverImage} projectName={t(item.titleKey)} tags={item.tagsKey}/>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ProjectList;