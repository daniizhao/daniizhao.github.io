import Gallery from "../../gallery/Gallery";

const PropDetails = () => {

  const PropArtwork = [
    {
      src: '/assets/img/props/2M_1T_Prop_Cover.png',
      original: '/assets/img/props/2M_1T_Prop_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_EarlyExploration.png',
      original: '/assets/img/props/2M_1T_Prop_EarlyExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_DesignExploration.png',
      original: '/assets/img/props/2M_1T_Prop_DesignExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_ColorExploration.png',
      original: '/assets/img/props/2M_1T_Prop_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_GlassDesignExploration.png',
      original: '/assets/img/props/2M_1T_Prop_GlassDesignExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_TurnAround.png',
      original: '/assets/img/props/2M_1T_Prop_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_Render.png',
      original: '/assets/img/props/2M_1T_Prop_Render.png',
      width: 1080,
      height: 1920
    },
    {
      src: '/assets/img/props/2M_2T_Prop_EarlyExploration.png',
      original: '/assets/img/props/2M_2T_Prop_EarlyExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_2T_Prop_DesignExploration.png',
      original: '/assets/img/props/2M_2T_Prop_DesignExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_2T_Prop_ColorExploration.png',
      original: '/assets/img/props/2M_2T_Prop_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_2T_Prop_Turnaround.png',
      original: '/assets/img/props/2M_2T_Prop_Turnaround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_2T_Prop_Callouts.png',
      original: '/assets/img/props/2M_2T_Prop_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_2T_Prop_Render.png',
      original: '/assets/img/props/2M_2T_Prop_Render.png',
      width: 1920,
      height: 1080
    },
    
    {
      src: '/assets/img/props/1M_3T_Prop_Cover.png',
      original: '/assets/img/props/1M_3T_Prop_Cover.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_3T_Prop_Exploration.png',
      original: '/assets/img/props/1M_3T_Prop_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_3T_Prop_ColorExploration.png',
      original: '/assets/img/props/1M_3T_Prop_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_3T_Prop_TurnAround.png',
      original: '/assets/img/props/1M_3T_Prop_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_3T_Prop_Callouts.png',
      original: '/assets/img/props/1M_3T_Prop_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_3T_Prop_Render.png',
      original: '/assets/img/props/1M_3T_Prop_Render.png',
      width: 1080,
      height: 1920
    },
    {
      src: '/assets/img/props/1M_2T_LongWeapon_Portada.png',
      original: '/assets/img/props/1M_2T_LongWeapon_Portada.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_LongWeapon_Exploration.png',
      original: '/assets/img/props/1M_2T_LongWeapon_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_LongWeapon_TurnAround.png',
      original: '/assets/img/props/1M_2T_LongWeapon_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_LongWeapon_Callouts.png',
      original: '/assets/img/props/1M_2T_LongWeapon_Callouts.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_ShortWeapon_Portada.png',
      original: '/assets/img/props/1M_2T_ShortWeapon_Portada.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_ShortWeapon_Exploration.png',
      original: '/assets/img/props/1M_2T_ShortWeapon_Exploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_ShortWeapon_TurnAround.png',
      original: '/assets/img/props/1M_2T_ShortWeapon_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/1M_2T_ShortWeapon_Callouts.png',
      original: '/assets/img/props/1M_2T_ShortWeapon_Callouts.png',
      width: 1920,
      height: 1080
    },
  ]

  return (
    <Gallery items={PropArtwork} />
  )
};

export default PropDetails;