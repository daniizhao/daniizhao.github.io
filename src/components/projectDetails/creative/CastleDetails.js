import "../ProjectDetails.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ESC_KEY } from "../../../utils/keyboadEvents";

const CastleDetails = () => {
  const { t } = useTranslation();

  const KatrinaImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Face_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Expressions.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Body_Attitude.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Katrina_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Character_Render.png',
      width: 1080,
      height: 1920
    },
  ];

  const MephistoImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_Body_Attitude.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Mephisto_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Creature_Render.png',
      width: 1080,
      height: 1920
    },
  ];

  const PropImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Exploration_2.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Design_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Props_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Prop_Render.png',
      width: 1080,
      height: 1920
    },
  ];

  
  const KitchenImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Kitchen_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Kitchen_Thumbnails.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Kitchen_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Kitchen_Render.png',
      width: 1920,
      height: 1080
    },
  ];

  const BedroomImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Bedroom_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Bedroom_Thumbnails.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Bedroom_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Bedroom_Render.png',
      width: 1920,
      height: 1080
    },
  ];

  const LibraryImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Library_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Library_Thumbnails.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Library_Color_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_Library_Render.png',
      width: 1920,
      height: 1080
    },
  ];

  const Character3DImages = [
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_3d_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_3d_Process_1.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_3d_Process_2.png',
      width: 1920,
      height: 1080
    },
    // {
    //   src: '/assets/img/castleProject/CPT_2M_1T_ZhaoDaniela_3d_Process_3.png',
    //   width: 1920,
    //   height: 1080
    // },
    {
      src: '/assets/img/castleProject/Katrina_Render_Final.png',
      width: 1920,
      height: 1080
    },
  ];

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
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.CASTLE.CONTEXT')}
        </div>
        <PhotoAlbum photos={KatrinaImages} layout="rows" onClick={({index}) => {onPhotoClick(KatrinaImages, index)}} />
        
        <PhotoAlbum photos={MephistoImages} layout="rows" onClick={({index}) => {onPhotoClick(MephistoImages, index)}} />
        
        <PhotoAlbum photos={PropImages} layout="rows" onClick={({index}) => {onPhotoClick(PropImages, index)}} />
        
        <PhotoAlbum photos={KitchenImages} layout="rows" onClick={({index}) => {onPhotoClick(KitchenImages, index)}} />
        <PhotoAlbum photos={BedroomImages} layout="rows" onClick={({index}) => {onPhotoClick(BedroomImages, index)}} />
        <PhotoAlbum photos={LibraryImages} layout="rows" onClick={({index}) => {onPhotoClick(LibraryImages, index)}} />

        <div>
          {t('PROJECTS.CASTLE.3D')}
        </div>
        <PhotoAlbum photos={Character3DImages} layout="rows" onClick={({index}) => {onPhotoClick(Character3DImages, index)}} />

        <div>
          <video src="//assets/img/castleProject/TURN_AROUND_KATRINA.mp4" controls />
        </div>
        <div>
          {t('PROJECTS.CASTLE.3D_credits')}
        </div>
      </div>
      {
        selectedPhoto &&
        <Lightbox slides={selectedPhoto.photos} open={selectedPhoto} index={selectedPhoto.index} close={() => {setSelectedPhoto(null)}} plugins={[Zoom]} carousel={{finite: true}} />
      }
      
      <div className="project-links-wrapper">
        <div className="project-links-container">
          <div className="project-detail-title">
            {t('PROJECTS.SECTIONS.STACK')}
          </div>
          <div className="project-links-column">
            <div>
              Clip Studio Paint
            </div>
            <div>
              ZBrush
            </div>
            <div>
              Blender
            </div>
            <div>
              Maya
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CastleDetails;