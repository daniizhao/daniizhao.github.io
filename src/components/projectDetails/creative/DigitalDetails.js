import { DIGITAL_ARTWORK } from "../../../config/projectsInfo";
import Gallery from "../../gallery/Gallery";

const DigitalDetails = () => {

  return (
    <Gallery
      items={DIGITAL_ARTWORK}
      rowsConstraints={{
        minPhotos: 2,
        maxPhotos: 6
      }} />
  )
};

export default DigitalDetails;