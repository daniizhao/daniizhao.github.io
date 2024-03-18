import { PROP_PROJECTS } from "../../../config/projectsInfo";
import ProjectList from "../../projectList/ProjectList";

const PropDetails = () => {

  return (
    <ProjectList list={PROP_PROJECTS} showBottomBkg={false} />
  )
};

export default PropDetails;