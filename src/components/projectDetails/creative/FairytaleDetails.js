import "../ProjectDetails.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { ESC_KEY } from "../../../utils/keyboadEvents";

const FairyTaleDetails = () => {

  const { t } = useTranslation();

  const RedHoodImages = [
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character_Atittude.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Character_Callouts.png',
      width: 1920,
      height: 1080
    },
  ];

  const WuKongImages = [
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature_Attitude.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Creature_Callouts.png',
      width: 1920,
      height: 1080
    }
  ];

  const PropImages = [
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Prop.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Prop_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Prop_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Prop_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Prop_Callouts.png',
      width: 1920,
      height: 1080
    }
  ];

  const EnvirontmentImages = [
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Environment_Render_Presentation.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Environment_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Environment_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Environment_Render_View1.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_Environment_Render_View2.png',
      width: 1920,
      height: 1080
    }
  ];

  const Character3DImages = [
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_3D_Render_Presentation.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_3D_process.png',
      width: 1920,
      height: 1080
    },
    {
      src: 'assets/img/fairyTale/CPT_1M_3T_ZhaoDaniela_3D_finalTurnAround.png',
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
          {t('PROJECTS.FAIRYTALE.CONTEXT')}
        </div>
        <PhotoAlbum photos={RedHoodImages} layout="rows" onClick={({index}) => {onPhotoClick(RedHoodImages, index)}} />
        
        <PhotoAlbum photos={WuKongImages} layout="rows" onClick={({index}) => {onPhotoClick(WuKongImages, index)}} />
        
        <PhotoAlbum photos={PropImages} layout="rows" onClick={({index}) => {onPhotoClick(PropImages, index)}} />
        
        <PhotoAlbum photos={EnvirontmentImages} layout="rows" onClick={({index}) => {onPhotoClick(EnvirontmentImages, index)}} />

        <div>
          {t('PROJECTS.FAIRYTALE.3D')}
        </div>
        <PhotoAlbum photos={Character3DImages} layout="rows" onClick={({index}) => {onPhotoClick(Character3DImages, index)}} />
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
          </div>
        </div>
      </div>
    </div>
  )
};

export default FairyTaleDetails;