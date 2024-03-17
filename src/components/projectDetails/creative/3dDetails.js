import { _renderVideo } from "../../../utils/slideshow";
import Gallery from "../../gallery/Gallery";

const Details3D = () => {

  const Items3D = [
    {
      src: '/assets/img/3D/1M_2T_Render_Creature_1.png',
      original: '/assets/img/3D/1M_2T_Render_Creature_1.png',
      thumbnail: '/assets/img/3D/1M_2T_Render_Creature_1.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/3D/1M_2T_Render_Creature_2.png',
      original: '/assets/img/3D/1M_2T_Render_Creature_2.png',
      thumbnail: '/assets/img/3D/1M_2T_Render_Creature_2.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/3D/1M_2T_Render_Creature_4.png',
      original: '/assets/img/3D/1M_2T_Render_Creature_4.png',
      thumbnail: '/assets/img/3D/1M_2T_Render_Creature_4.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/3D/1M_3T_3d_Cover.png',
      original: '/assets/img/3D/1M_3T_3d_Cover.png',
      thumbnail: '/assets/img/3D/1M_3T_3d_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/3D/1M_3T_3d_TurnAround.png',
      original: '/assets/img/3D/1M_3T_3d_TurnAround.png',
      thumbnail: '/assets/img/3D/1M_3T_3d_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/3D/2M_1T_TurnAround_Thumbnail.png',
      original: '/assets/img/3D/2M_1T_TurnAround.mp4',
      thumbnail: '/assets/img/3D/2M_1T_TurnAround_Thumbnail.png',
      width: 1920,
      height: 1080,
      renderItem: _renderVideo.bind(this)
    },
    {
      src: '/assets/img/3D/2M_1T_Render_Final.png',
      original: '/assets/img/3D/2M_1T_Render_Final.png',
      thumbnail: '/assets/img/3D/2M_1T_Render_Final.png',
      width: 1080,
      height: 1920
    },
    {
      src: '/assets/img/3D/2M_2T_Character_Turntable_Clay.png',
      original: '/assets/img/3D/2M_2T_TurnAround_Clay.mp4',
      thumbnail: '/assets/img/3D/2M_2T_Character_Turntable_Clay.png',
      width: 1920,
      height: 1080,
      renderItem: _renderVideo.bind(this)
    },
    {
      src: '/assets/img/3D/2M_2T_Character_Turntable_Color.png',
      original: '/assets/img/3D/2M_2T_TurnAround.mp4',
      thumbnail: '/assets/img/3D/2M_2T_Character_Turntable_Color.png',
      width: 1920,
      height: 1080,
      renderItem: _renderVideo.bind(this)
    },
    {
      src: '/assets/img/3D/2M_2T_Character_Render.png',
      original: '/assets/img/3D/2M_2T_Character_Render.png',
      thumbnail: '/assets/img/3D/2M_2T_Character_Render.png',
      width: 1080,
      height: 1920
    },
  ]

  return (
    <Gallery items={Items3D}/>
  )
};

export default Details3D;