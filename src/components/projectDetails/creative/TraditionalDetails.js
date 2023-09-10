import "../ProjectDetails.scss";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const TraditionalDetails = () => {

  const SketchbookPhotos = [
    {
      src: 'assets/img/artworks/sketchbook.jpg',
      width: 2345,
      height: 2321
    },
    {
      src: 'assets/img/artworks/sketchbook_0005.jpg',
      width: 1868,
      height: 2479
    },
    {
      src: 'assets/img/artworks/sketchbook_0006.jpg',
      width: 2401,
      height: 3078
    },
    {
      src: 'assets/img/artworks/sketchbook_0007.jpg',
      width: 1897,
      height: 2664
    },
    {
      src: 'assets/img/artworks/sketchbook_0008.jpg',
      width: 1661,
      height: 2056
    },
    {
      src: 'assets/img/artworks/sketchbook_0009.jpg',
      width: 1755,
      height: 2618
    },
    {
      src: 'assets/img/artworks/sketchbook_0011.jpg',
      width: 1804,
      height: 2557
    },
    {
      src: 'assets/img/artworks/sketchbook_0013.jpg',
      width: 1711,
      height: 2432
    },
    {
      src: 'assets/img/artworks/sketchbook_0014.jpg',
      width: 1682,
      height: 2415
    },
    {
      src: 'assets/img/artworks/sketchbook_0015.jpg',
      width: 1814,
      height: 2053
    },
    {
      src: 'assets/img/artworks/sketchbook_0019.jpg',
      width: 2676,
      height: 1757
    },
    {
      src: 'assets/img/artworks/sketchbook_0020.jpg',
      width: 1693,
      height: 2009
    },
    {
      src: 'assets/img/artworks/sketchbook_0025.jpg',
      width: 1695,
      height: 1655
    },
    {
      src: 'assets/img/artworks/sketchbook_0032.jpg',
      width: 2422,
      height: 2862
    },
    {
      src: 'assets/img/artworks/sketchbook_0036.jpg',
      width: 1638,
      height: 2468
    },
    {
      src: 'assets/img/artworks/sketchbook_0042.jpg',
      width: 2166,
      height: 2355
    },
    {
      src: 'assets/img/artworks/sketchbook_0043.jpg',
      width: 2629,
      height: 3852
    },
    {
      src: 'assets/img/artworks/sketchbook_0044.jpg',
      width: 1725,
      height: 2606
    },
    {
      src: 'assets/img/artworks/sketchbook_0047.jpg',
      width: 1722,
      height: 2709
    },
  ];

  const ArtworksPhotos = [
    {
      src: 'assets/img/artworks/traditional.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0001.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0002.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0003.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0004.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0005.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0006.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0007.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0008.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0024.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0025.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0027.jpg',
      width: 2410,
      height: 3438
    },
    {
      src: 'assets/img/artworks/traditional_0028.jpg',
      width: 2410,
      height: 3438
    },
  ];

  const { t } = useTranslation();

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
          {t('PROJECTS.TRADITIONAL.CONTEXT')}
        </div>
        <div className="project-detail-subtitle">
          {t('PROJECTS.TRADITIONAL.SKETCHBOOK')}
        </div>
        <PhotoAlbum photos={SketchbookPhotos} layout="rows" onClick={({index}) => {onPhotoClick(SketchbookPhotos, index)}} />
        <div className="project-detail-subtitle">
          {t('PROJECTS.TRADITIONAL.ARTWORKS')}
        </div>
        <PhotoAlbum photos={ArtworksPhotos} layout="rows" onClick={({index}) => {onPhotoClick(ArtworksPhotos, index)}} />
      </div>
      {
        selectedPhoto &&
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} plugins={[Zoom]} carousel={{finite: true}} />
      }
    </div>
  )
};

export default TraditionalDetails;