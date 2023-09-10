import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const DigitalDetails = () => {

  const { t } = useTranslation();

  const SketchesPhotos = [
    {
      src: 'assets/img/artworks/sketches_Hands.png',
      width: 2214,
      height: 1521
    },
    {
      src: 'assets/img/artworks/sketches_heads.png',
      width: 2162,
      height: 1521
    },
    {
      src: 'assets/img/artworks/sketches.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/artworks/sketches_2.png',
      width: 3840,
      height: 2160
    },
  ];
  
  const ArtworksPhotos = [
    {
      src: 'assets/img/artworks/alone.png',
      width: 4000,
      height: 3000
    },
    {
      src: 'assets/img/artworks/portraitEmerald.png',
      width: 3000,
      height: 4000
    },
    {
      src: 'assets/img/artworks/vampire.png',
      width: 2160,
      height: 2772
    },
    {
      src: 'assets/img/artworks/yonaSpelling.png',
      width: 4000,
      height: 3200
    },
    {
      src: 'assets/img/artworks/AstridSheathe.png',
      width: 1080,
      height: 1920
    },
  ];
  
  const ChallengesPhotos = [
    {
      src: 'assets/img/artworks/sailormoonredraw.png',
      width: 4000,
      height: 3000
    },
    {
      src: 'assets/img/artworks/crosshatching.png',
      width: 3200,
      height: 4000
    },
    {
      src: 'assets/img/artworks/JustineFlorentinoChallenge.png',
      width: 3200,
      height: 4000
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const onPhotoClick = (photoArray, index) => {
    setSelectedPhoto({
      photos: photoArray,
      index: index
    });
  };

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail-column">
        <div>
          {t('PROJECTS.DIGITAL.CONTEXT')}
        </div>
        <div className="project-detail-subtitle">
          {t('PROJECTS.DIGITAL.SKETCHES')}
        </div>
        <PhotoAlbum photos={SketchesPhotos} layout="rows" onClick={({index}) => {onPhotoClick(SketchesPhotos, index)}} />
        <div className="project-detail-subtitle">
          {t('PROJECTS.DIGITAL.ARTWORKS')}
        </div>
        <PhotoAlbum photos={ArtworksPhotos} layout="rows" onClick={({index}) => {onPhotoClick(ArtworksPhotos, index)}} />
        <div className="project-detail-subtitle">
          {t('PROJECTS.DIGITAL.CHALLENGES')}
        </div>
        <PhotoAlbum photos={ChallengesPhotos} layout="rows" onClick={({index}) => {onPhotoClick(ChallengesPhotos, index)}} />
      </div>
      {
        selectedPhoto &&
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} plugins={[Zoom]} carousel={{finite: true}} />
      }
    </div>
  )
};

export default DigitalDetails;