import "./Gallery.scss";
import { useCallback, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ESC_KEY } from "../../utils/keyboadEvents.js";

const Gallery = (props) => {

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const onPhotoClick = (photoArray, index) => {
    setSelectedPhoto({
      photos: photoArray,
      index: index
    });
  };

  const handleEsc = useCallback((event) => {
    if (event.key === ESC_KEY && selectedPhoto !== null) {
      event.stopPropagation();
    }
  }, [selectedPhoto]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleEsc, true);
    return  () => {
      document.removeEventListener('keydown', handleEsc, true);
    }
  }, [handleEsc]);

  return (
    <div className="gallery-detail-wrapper">
      <PhotoAlbum
        photos={props.items}
        layout="rows"
        onClick={({index}) => {
          onPhotoClick(props.items, index)
        }}
        rowConstraints={props.rowsConstraints || {
          minPhotos: 1,
          maxPhotos: 3
        }}
      />

      {
        props.videos && 
        props.videos.map((vid, index) => {
          return (
            <div key={`video-${index}`}>
              <video src={vid} controls />
            </div>
          )
        })
      }
      {
        selectedPhoto &&
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} plugins={[Zoom]} carousel={{finite: true}} />
      }
    </div>
  )
};

export default Gallery;