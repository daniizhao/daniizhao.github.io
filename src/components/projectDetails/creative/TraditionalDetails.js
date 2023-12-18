import "../ProjectDetails.scss";

import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ESC_KEY } from "../../../utils/keyboadEvents";

const TraditionalDetails = () => {

  const SketchbookPhotos = [
    {
      src: 'assets/img/artworks/sketchbook.jpg',
      width: 1173,
      height: 1161
    },
    {
      src: 'assets/img/artworks/sketchbook_0005.jpg',
      width: 934,
      height: 1240
    },
    {
      src: 'assets/img/artworks/sketchbook_0006.jpg',
      width: 1201,
      height: 1539
    },
    {
      src: 'assets/img/artworks/sketchbook_0007.jpg',
      width: 949,
      height: 1332
    },
    {
      src: 'assets/img/artworks/sketchbook_0008.jpg',
      width: 831,
      height: 1024
    },
    {
      src: 'assets/img/artworks/sketchbook_0009.jpg',
      width: 878,
      height: 1309
    },
    {
      src: 'assets/img/artworks/sketchbook_0011.jpg',
      width: 902,
      height: 1279
    },
    {
      src: 'assets/img/artworks/sketchbook_0013.jpg',
      width: 856,
      height: 1216
    },
    {
      src: 'assets/img/artworks/sketchbook_0014.jpg',
      width: 841,
      height: 1208
    },
    {
      src: 'assets/img/artworks/sketchbook_0015.jpg',
      width: 907,
      height: 1026
    },
    {
      src: 'assets/img/artworks/sketchbook_0019.jpg',
      width: 1338,
      height: 879
    },
    {
      src: 'assets/img/artworks/sketchbook_0020.jpg',
      width: 847,
      height: 1005
    },
    {
      src: 'assets/img/artworks/sketchbook_0025.jpg',
      width: 848,
      height: 828
    },
    {
      src: 'assets/img/artworks/sketchbook_0032.jpg',
      width: 1211,
      height: 1431
    },
    {
      src: 'assets/img/artworks/sketchbook_0036.jpg',
      width: 819,
      height: 1234
    },
    {
      src: 'assets/img/artworks/sketchbook_0042.jpg',
      width: 1083,
      height: 1178
    },
    {
      src: 'assets/img/artworks/sketchbook_0043.jpg',
      width: 1315,
      height: 1926
    },
    {
      src: 'assets/img/artworks/sketchbook_0044.jpg',
      width: 863,
      height: 1303
    },
    {
      src: 'assets/img/artworks/sketchbook_0047.jpg',
      width: 861,
      height: 1355
    },
  ];

  const ArtworksPhotos = [
    {
      src: 'assets/img/artworks/traditional.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0001.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0002.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0003.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0004.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0005.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0006.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0007.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0008.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0029.jpg',
      width: 1719,
      height: 1205
    },
    {
      src: 'assets/img/artworks/traditional_0025.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0027.jpg',
      width: 1205,
      height: 1719
    },
    {
      src: 'assets/img/artworks/traditional_0028.jpg',
      width: 1205,
      height: 1719
    },
  ];

  const LiveDrawings = [
    {
      src: 'assets/img/artworks/Modelo_20230203_003.jpg',
      width: 1807,
      height: 1578
    },
    {
      src: 'assets/img/artworks/Modelo_20230203_006.jpg',
      width: 1078,
      height: 989
    },
    {
      src: 'assets/img/artworks/Modelo_20230223_001.jpg',
      width: 870,
      height: 1435
    },
    {
      src: 'assets/img/artworks/Modelo_20230223_004.jpg',
      width: 991,
      height: 1048
    },
    {
      src: 'assets/img/artworks/Modelo_20230223_005.jpg',
      width: 679,
      height: 1183
    },
    {
      src: 'assets/img/artworks/Modelo_20230317_003.jpg',
      width: 1011,
      height: 1498
    },
    {
      src: 'assets/img/artworks/modelo_20230428_0001.jpg',
      width: 1115,
      height: 1914
    },
    {
      src: 'assets/img/artworks/modelo_20230428_0002.jpg',
      width: 2047,
      height: 716
    },
    {
      src: 'assets/img/artworks/modelo_20230428_0003.jpg',
      width: 998,
      height: 1442
    },
    {
      src: 'assets/img/artworks/modelo_20230428_0004.jpg',
      width: 1563,
      height: 1248
    },
    {
      src: 'assets/img/artworks/modelo_20230428_0006.jpg',
      width: 907,
      height: 1509
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
        <div className="project-detail-subtitle">
          {t('PROJECTS.TRADITIONAL.LIVE')}
        </div>
        <PhotoAlbum photos={LiveDrawings} layout="rows" onClick={({index}) => {onPhotoClick(LiveDrawings, index)}} />
      </div>
      {
        selectedPhoto &&
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} plugins={[Zoom]} carousel={{finite: true}} />
      }
    </div>
  )
};

export default TraditionalDetails;