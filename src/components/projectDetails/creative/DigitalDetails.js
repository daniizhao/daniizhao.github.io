import { useTranslation } from "react-i18next";
import "../ProjectDetails.scss";

import Sketch1 from "../../../assets/img/artworks/sketches_Hands.png";
import Sketch2 from "../../../assets/img/artworks/sketches_heads.png";
import Sketch3 from "../../../assets/img/artworks/sketches.png";
import Sketch4 from "../../../assets/img/artworks/sketches_2.png";

import ArtworkSailorMoon from "../../../assets/img/artworks/sailormoonredraw.png";
import ArtworkCrosshatching from "../../../assets/img/artworks/crosshatching.png";
import ArtworkDTIYJustineFlorentino from "../../../assets/img/artworks/JustineFlorentinoChallenge.png";

import ArtworkAlone from "../../../assets/img/artworks/alone.png";
import ArtworkEmerald from "../../../assets/img/artworks/portraitEmerald.png";
import ArtworkVampire from "../../../assets/img/artworks/vampire.png";
import ArtworkYonaSpelling from "../../../assets/img/artworks/yonaSpelling.png";
import ArtworkAstridBack from "../../../assets/img/artworks/AstridSheathe.png";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const DigitalDetails = () => {

  const { t } = useTranslation();

  const SketchesPhotos = [
    {
      src: Sketch1,
      width: 2214,
      height: 1521
    },
    {
      src: Sketch2,
      width: 2162,
      height: 1521
    },
    {
      src: Sketch3,
      width: 3840,
      height: 2160
    },
    {
      src: Sketch4,
      width: 3840,
      height: 2160
    },
  ];
  
  const ArtworksPhotos = [
    {
      src: ArtworkAlone,
      width: 4000,
      height: 3000
    },
    {
      src: ArtworkEmerald,
      width: 3000,
      height: 4000
    },
    {
      src: ArtworkVampire,
      width: 2160,
      height: 2772
    },
    {
      src: ArtworkYonaSpelling,
      width: 4000,
      height: 3200
    },
    {
      src: ArtworkAstridBack,
      width: 1080,
      height: 1920
    },
  ];
  
  const ChallengesPhotos = [
    {
      src: ArtworkSailorMoon,
      width: 4000,
      height: 3000
    },
    {
      src: ArtworkCrosshatching,
      width: 3200,
      height: 4000
    },
    {
      src: ArtworkDTIYJustineFlorentino,
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
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} />
      }
    </div>
  )
};

export default DigitalDetails;