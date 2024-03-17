import { ENV_PROJECTS } from "../../../config/projectsInfo";
import ProjectList from "../../projectList/ProjectList";

const EnvironmentDetails = () => {

  return (
    <ProjectList list={ENV_PROJECTS} showBottomBkg={false} />
  )
};

export default EnvironmentDetails;