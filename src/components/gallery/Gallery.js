import "./Gallery.scss";
import { useCallback, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import { ESC_KEY } from "../../utils/keyboadEvents.js";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Icon from "../icon/Icon.js";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@mui/material";

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
      setSelectedPhoto(null);
    }
  }, [selectedPhoto]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleEsc, true);
    return  () => {
      document.removeEventListener('keydown', handleEsc, true);
    }
  }, [handleEsc]);

  const _renderVideo = (item) => {
    return (
      <div>
        {this.state.showVideo ? (
          <div className="video-wrapper">
            <button className="close-video" onClick={this._toggleShowVideo} />
            <iframe
              title="sample video"
              width="560"
              height="315"
              src={item.embedUrl}
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
        ) : (
          <>
            <button className="play-button" onClick={this._toggleShowVideo} />
            <img
              alt="sample video cover"
              className="image-gallery-image"
              src={item.original}
            />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: "0", left: "initial" }}
              >
                {item.description}
              </span>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="project-detail-wrapper">
      <PhotoAlbum photos={props.items} layout="rows" onClick={({index}) => {onPhotoClick(props.items, index)}} />
      <AnimatePresence>
        {
          selectedPhoto &&
          <Modal
            open={selectedPhoto != null}
            onClose={()=>{setSelectedPhoto(null)}}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          >
            <motion.div
              className="zoomed-image-container"
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
              <div className="zoomed-image-exit-button" onClick={() => {setSelectedPhoto(null)}}>
                <Icon iconName='fa-solid fa-xmark' color='var(--white)' />
              </div>
              <div className="zoomed-image-content">
                <ImageGallery
                  items={props.items}
                  showPlayButton={false}
                  startIndex={selectedPhoto.index}
                  showThumbnails={false}
                  showFullscreenButton={false}
                />
              </div>
            </motion.div>
          </Modal>
        }
      </AnimatePresence>
    </div>
  )
};

export default Gallery;