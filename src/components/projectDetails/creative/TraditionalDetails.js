import { TRADITIONAL_ARTWORK } from "../../../config/projectsInfo";
import Gallery from "../../gallery/Gallery";

const TraditionalDetails = () => {

  return (
    <Gallery
      items={TRADITIONAL_ARTWORK} 
      rowsConstraints={{
        minPhotos: 2,
        maxPhotos: 6
      }} />
  )
};

export default TraditionalDetails;