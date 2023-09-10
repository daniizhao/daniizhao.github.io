import "../ProjectDetails.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const LaboratoryDetails = () => {

  const { t } = useTranslation();

  const LabPhotos = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_Environment_Render_Presentation.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_Environment_Exploration.png',
      width: 3840,
      height: 2160
    },
  ];
  const LabAlternativeViews = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_Environment_Render_AltView_1.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_Environment_Render_AltView_2.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_Environment_Render_AltView_3.png',
      width: 3840,
      height: 2160
    },
  ];

  const SmallCreatureCoverImages = [
    {
      src: 'assets/img/labProject/SmallCreature_Portada.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_SmallCreature_Exploration.png',
      width: 3840,
      height: 2160
    },
  ];
  const SmallCreatureImages = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_SmallCreature_TurnAround.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_SmallCreature_BodyAttitude.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_SmallCreature_CallOuts.png',
      width: 3840,
      height: 2160
    }
  ];

  const BigCreatureCoverImages = [
    {
      src: 'assets/img/labProject/BigCreature_Portada.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_BigCreature_Exploration.png',
      width: 3840,
      height: 2160
    },
  ];
  const BigCreatureImages = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_BigCreature_TurnAround.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_BigCreature_BodyAttitude.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_BigCreature_CallOuts.png',
      width: 3840,
      height: 2160
    }
  ];

  const ShortWeaponCoverImages = [
    {
      src: 'assets/img/labProject/ShortWeapon_Portada.png',
      width: 3840,
      height: 2160
    },
  ];
  const ShortWeaponImages = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_ShortWeapon_Exploration.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_ShortWeapon_TurnAround.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_ShortWeapon_Callouts.png',
      width: 3840,
      height: 2160
    }
  ];

  const LongWeaponCoverImages = [
    {
      src: 'assets/img/labProject/LongWeapon_Portada.png',
      width: 3840,
      height: 2160
    },
  ];
  const LongWeaponImages = [
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_LongWeapon_Exploration.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_LongWeapon_TurnAround.png',
      width: 3840,
      height: 2160
    },
    {
      src: 'assets/img/labProject/CPT_1M_2T_ZhaoDaniela_LongWeapon_Callouts.png',
      width: 3840,
      height: 2160
    }
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
        <div className="project-detail-title">
          {t('PROJECTS.SECTIONS.CONTEXT')}
        </div>
        <div>
          {t('PROJECTS.LABORATORY.CONTEXT')}
        </div>
        <PhotoAlbum photos={LabPhotos} layout="rows" onClick={({index}) => {onPhotoClick(LabPhotos, index)}} />
        <PhotoAlbum photos={LabAlternativeViews} layout="rows" onClick={({index}) => {onPhotoClick(LabAlternativeViews, index)}} />
        
        <PhotoAlbum photos={SmallCreatureCoverImages} layout="rows" onClick={({index}) => {onPhotoClick(SmallCreatureCoverImages, index)}} />
        <PhotoAlbum photos={SmallCreatureImages} layout="rows" onClick={({index}) => {onPhotoClick(SmallCreatureImages, index)}} />
        
        <PhotoAlbum photos={BigCreatureCoverImages} layout="rows" onClick={({index}) => {onPhotoClick(BigCreatureCoverImages, index)}} />
        <PhotoAlbum photos={BigCreatureImages} layout="rows" onClick={({index}) => {onPhotoClick(BigCreatureImages, index)}} />
        
        <PhotoAlbum photos={ShortWeaponCoverImages} layout="rows" onClick={({index}) => {onPhotoClick(ShortWeaponCoverImages, index)}} />
        <PhotoAlbum photos={ShortWeaponImages} layout="rows" onClick={({index}) => {onPhotoClick(ShortWeaponImages, index)}} />
                
        <PhotoAlbum photos={LongWeaponCoverImages} layout="rows" onClick={({index}) => {onPhotoClick(LongWeaponCoverImages, index)}} />
        <PhotoAlbum photos={LongWeaponImages} layout="rows" onClick={({index}) => {onPhotoClick(LongWeaponImages, index)}} />
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

export default LaboratoryDetails;