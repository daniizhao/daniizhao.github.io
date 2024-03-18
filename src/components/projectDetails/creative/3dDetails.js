import { PROJECTS_3D } from "../../../config/projectsInfo";
import ProjectList from "../../projectList/ProjectList";

const Details3D = () => {

  return (
    <ProjectList list={PROJECTS_3D} showBottomBkg={false} />
  )
};

export default Details3D;