import { CREATURE_PROJECTS } from "../../../config/projectsInfo";
import ProjectList from "../../projectList/ProjectList";


const CreatureDetails = () => {

  return (
    <ProjectList list={CREATURE_PROJECTS} showBottomBkg={false} />
  )
};

export default CreatureDetails;