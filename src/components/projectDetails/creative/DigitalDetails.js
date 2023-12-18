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
      width: 1107,
      height: 761
    },
    {
      src: 'assets/img/artworks/sketches_heads.png',
      width: 1081,
      height: 761
    },
    {
      src: 'assets/img/artworks/sketches.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/artworks/sketches_2.png',
      width: 1920,
      height: 1080
    },
  ];
  
  const ArtworksPhotos = [
    {
      src: 'assets/img/artworks/alone.png',
      width: 2000,
      height: 1500
    },
    {
      src: 'assets/img/artworks/portraitEmerald.png',
      width: 1500,
      height: 2000
    },
    {
      src: 'assets/img/artworks/vampire.png',
      width: 1080,
      height: 1386
    },
    {
      src: 'assets/img/artworks/yonaSpelling.png',
      width: 2000,
      height: 1600
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
      width: 2000,
      height: 1500
    },
    {
      src: 'assets/img/artworks/crosshatching.png',
      width: 1600,
      height: 2000
    },
    {
      src: 'assets/img/artworks/JustineFlorentinoChallenge.png',
      width: 1600,
      height: 2000
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