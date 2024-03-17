import { CHARACTER_PROJECTS } from "../../../config/projectsInfo";
import ProjectList from "../../projectList/ProjectList";

const CharacterDetails = () => {

  return (
    <ProjectList list={CHARACTER_PROJECTS} showBottomBkg={false} />
  )
};

export default CharacterDetails;