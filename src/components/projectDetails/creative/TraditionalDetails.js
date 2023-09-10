import "../ProjectDetails.scss";
import Skb1 from "../../../assets/img/artworks/sketchbook.jpg";
import Skb2 from "../../../assets/img/artworks/sketchbook_0005.jpg";
import Skb3 from "../../../assets/img/artworks/sketchbook_0006.jpg";
import Skb4 from "../../../assets/img/artworks/sketchbook_0007.jpg";
import Skb5 from "../../../assets/img/artworks/sketchbook_0008.jpg";
import Skb6 from "../../../assets/img/artworks/sketchbook_0009.jpg";
import Skb7 from "../../../assets/img/artworks/sketchbook_0011.jpg";
import Skb8 from "../../../assets/img/artworks/sketchbook_0013.jpg";
import Skb9 from "../../../assets/img/artworks/sketchbook_0014.jpg";
import Skb10 from "../../../assets/img/artworks/sketchbook_0015.jpg";
import Skb11 from "../../../assets/img/artworks/sketchbook_0019.jpg";
import Skb12 from "../../../assets/img/artworks/sketchbook_0020.jpg";
import Skb13 from "../../../assets/img/artworks/sketchbook_0025.jpg";
import Skb14 from "../../../assets/img/artworks/sketchbook_0032.jpg";
import Skb15 from "../../../assets/img/artworks/sketchbook_0036.jpg";
import Skb16 from "../../../assets/img/artworks/sketchbook_0042.jpg";
import Skb17 from "../../../assets/img/artworks/sketchbook_0043.jpg";
import Skb18 from "../../../assets/img/artworks/sketchbook_0044.jpg";
import Skb19 from "../../../assets/img/artworks/sketchbook_0047.jpg";

import Trad1 from "../../../assets/img/artworks/traditional.jpg";
import Trad2 from "../../../assets/img/artworks/traditional_0001.jpg";
import Trad3 from "../../../assets/img/artworks/traditional_0002.jpg";
import Trad4 from "../../../assets/img/artworks/traditional_0003.jpg";
import Trad5 from "../../../assets/img/artworks/traditional_0004.jpg";
import Trad6 from "../../../assets/img/artworks/traditional_0005.jpg";
import Trad7 from "../../../assets/img/artworks/traditional_0006.jpg";
import Trad8 from "../../../assets/img/artworks/traditional_0007.jpg";
import Trad9 from "../../../assets/img/artworks/traditional_0008.jpg";
import Trad10 from "../../../assets/img/artworks/traditional_0024.jpg";
import Trad11 from "../../../assets/img/artworks/traditional_0025.jpg";
import Trad12 from "../../../assets/img/artworks/traditional_0027.jpg";
import Trad13 from "../../../assets/img/artworks/traditional_0028.jpg";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const TraditionalDetails = () => {

  const SketchbookPhotos = [
    {
      src: Skb1,
      width: 2345,
      height: 2321
    },
    {
      src: Skb2,
      width: 1868,
      height: 2479
    },
    {
      src: Skb3,
      width: 2401,
      height: 3078
    },
    {
      src: Skb4,
      width: 1897,
      height: 2664
    },
    {
      src: Skb5,
      width: 1661,
      height: 2056
    },
    {
      src: Skb6,
      width: 1755,
      height: 2618
    },
    {
      src: Skb7,
      width: 1804,
      height: 2557
    },
    {
      src: Skb8,
      width: 1711,
      height: 2432
    },
    {
      src: Skb9,
      width: 1682,
      height: 2415
    },
    {
      src: Skb10,
      width: 1814,
      height: 2053
    },
    {
      src: Skb11,
      width: 2676,
      height: 1757
    },
    {
      src: Skb12,
      width: 1693,
      height: 2009
    },
    {
      src: Skb13,
      width: 1695,
      height: 1655
    },
    {
      src: Skb14,
      width: 2422,
      height: 2862
    },
    {
      src: Skb15,
      width: 1638,
      height: 2468
    },
    {
      src: Skb16,
      width: 2166,
      height: 2355
    },
    {
      src: Skb17,
      width: 2629,
      height: 3852
    },
    {
      src: Skb18,
      width: 1725,
      height: 2606
    },
    {
      src: Skb19,
      width: 1722,
      height: 2709
    },
  ];

  const ArtworksPhotos = [
    {
      src: Trad1,
      width: 2410,
      height: 3438
    },
    {
      src: Trad2,
      width: 2410,
      height: 3438
    },
    {
      src: Trad3,
      width: 2410,
      height: 3438
    },
    {
      src: Trad4,
      width: 2410,
      height: 3438
    },
    {
      src: Trad5,
      width: 2410,
      height: 3438
    },
    {
      src: Trad6,
      width: 2410,
      height: 3438
    },
    {
      src: Trad7,
      width: 2410,
      height: 3438
    },
    {
      src: Trad8,
      width: 2410,
      height: 3438
    },
    {
      src: Trad9,
      width: 2410,
      height: 3438
    },
    {
      src: Trad10,
      width: 2410,
      height: 3438
    },
    {
      src: Trad11,
      width: 2410,
      height: 3438
    },
    {
      src: Trad12,
      width: 2410,
      height: 3438
    },
    {
      src: Trad13,
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
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} />
      }
    </div>
  )
};

export default TraditionalDetails;