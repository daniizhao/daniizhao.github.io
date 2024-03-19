// import PlaceholderImage from "../assets/img/keyboard.jpg";
import CompressorDetails from "../components/projectDetails/technological/CompressorDetails";
import BreakInDetails from "../components/projectDetails/technological/BreakInDetails";
import QompDetails from "../components/projectDetails/technological/QompDetails";
import PortfolioDetails from "../components/projectDetails/technological/WebsitePortfolio";
import Gallery from "../components/gallery/Gallery";


export const TECH_PROJECTS = [
  {
    id: `tech-0`,
    coverImage: "/assets/img/Compressor.png",
    titleKey: "PROJECTS.COMPRESSOR.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DEVELOPMENT",
      "Java",
      "UPC",
    ],
    detailsComponent: <CompressorDetails />
  },
  {
    id: `tech-1`,
    coverImage: "/assets/img/BreakIn_Cover.png",
    titleKey: "PROJECTS.BREAKIN.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.GAME",
      "OpenGL",
      "2D",
      "UPC",
    ],
    detailsComponent: <BreakInDetails />
  },
  {
    id: `tech-2`,
    coverImage: "/assets/img/AmongUs_Cover.png",
    titleKey: "PROJECTS.QOMP.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.GAME",
      "Unity",
      "3D",
      "UPC",
    ],
    detailsComponent: <QompDetails />
  },
  {
    id: `tech-3`,
    coverImage: "/assets/img/Portfolio_Cover.png",
    titleKey: "PROJECTS.PORTFOLIO.TITLE",
    tagsKey: [
      "Web",
      "PROJECTS.TAGS.DEVELOPMENT",
      "PROJECTS.TAGS.DESIGN",
    ],
    detailsComponent: <PortfolioDetails />
  },
];

export const CHARACTER_PROJECTS = [
  {
    id: `character-Katrina`,
    coverImage: "/assets/img/characters/2M_1T_Character_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/characters/2M_1T_Character_EarlyExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_HairExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_ColiorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_Expressions.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_BodyAttitude.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_1T_Character_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
  {
    id: `character-Dexter`,
    coverImage: "/assets/img/characters/2M_2T_Character_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items ={[
      {
        src: '/assets/img/characters/2M_2T_Character_EarlyExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_DesignExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_FaceExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_Turnaround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_Expressions.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_BodyAttitude.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/2M_2T_Character_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
  {
    id: `character-Hong-Mei`,
    coverImage: "/assets/img/characters/1M_3T_Character_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/characters/1M_3T_Character_Cover.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_BodyExpressions.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/characters/1M_3T_Character_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
]

export const CREATURE_PROJECTS = [
  {
    id: `creature-Mephisto`,
    coverImage: "/assets/img/creatures/2M_1T_Creature_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/creatures/2M_1T_Creature_EarlyExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/2M_1T_Creature_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/2M_1T_Creature_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/2M_1T_Creature_BodyAttitude.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/2M_1T_Creature_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/2M_1T_Creature_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
  {
    id: `creature-Wukong`,
    coverImage: "/assets/img/creatures/1M_3T_Creature_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items ={[
      {
        src: '/assets/img/creatures/1M_3T_Creature_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_3T_Creature_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_3T_Creature_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_3T_Creature_BodyExpressions.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_3T_Creature_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_3T_Creature_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
  {
    id: `creature-Bear`,
    coverImage: "/assets/img/creatures/1M_2T_BigCreature_Portada.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/creatures/1M_2T_BigCreature_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_BigCreature_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_BigCreature_BodyAttitude.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_BigCreature_CallOuts.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `creature-owl`,
    coverImage: "/assets/img/creatures/1M_2T_SmallCreature_Portada.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/creatures/1M_2T_SmallCreature_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_SmallCreature_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_SmallCreature_BodyAttitude.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/creatures/1M_2T_SmallCreature_CallOuts.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
]

export const PROP_PROJECTS = [
  {
    id: `prop-Duo`,
    coverImage: "/assets/img/props/2M_1T_Prop_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[{
      src: '/assets/img/props/2M_1T_Prop_EarlyExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_DesignExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_ColorExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_GlassDesignExploration.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_TurnAround.png',
      width: 1920,
      height: 1080
    },
    {
      src: '/assets/img/props/2M_1T_Prop_Render.png',
      width: 1080,
      height: 1920
    },
    ]} />
  },
  {
    id: `prop-drums`,
    coverImage: "/assets/img/props/2M_2T_Prop_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items ={[
      {
        src: '/assets/img/props/2M_2T_Prop_EarlyExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/2M_2T_Prop_DesignExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/2M_2T_Prop_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/2M_2T_Prop_Turnaround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/2M_2T_Prop_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/2M_2T_Prop_Render.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `props-basket`,
    coverImage: "/assets/img/props/1M_3T_Prop_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/props/1M_3T_Prop_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_3T_Prop_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_3T_Prop_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_3T_Prop_Callouts.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_3T_Prop_Render.png',
        width: 1080,
        height: 1920
      },
    ]} />
  },
  {
    id: `prop-oxy_tian`,
    coverImage: "/assets/img/props/1M_2T_LongWeapon_Portada.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/props/1M_2T_LongWeapon_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_2T_LongWeapon_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_2T_LongWeapon_Callouts.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `prop-oxy_yue`,
    coverImage: "/assets/img/props/1M_2T_ShortWeapon_Portada.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/props/1M_2T_ShortWeapon_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_2T_ShortWeapon_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/props/1M_2T_ShortWeapon_Callouts.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
]

export const ENV_PROJECTS = [
  {
    id: `env-budapest`,
    coverImage: "/assets/img/environments/2M_2T_Environment_Render.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/environments/2M_2T_Env_Thumbnails.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_2T_Env_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_2T_Environment_Render.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_2T_Environment_Render_View1.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_2T_Environment_Render_View2.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `env-library`,
    coverImage: "/assets/img/environments/2M_1T_Environment_Library.png",
    titleKey: "",
    detailsComponent: <Gallery items ={[
      {
        src: '/assets/img/environments/2M_1T_Environment_Library_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_1T_Environment_Library_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_1T_Library_Render.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `env-bedroom`,
    coverImage: "/assets/img/environments/2M_1T_Environment_Bedroom.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/environments/2M_1T_Environment_Bedroom_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_1T_Environment_Bedroom_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/2M_1T_Bedroom_Render.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `env-lab`,
    coverImage: "/assets/img/environments/1M_2T_Laboratory_Render_AltView1.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/environments/1M_2T_Environment_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_2T_Laboratory_Render.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_2T_Laboratory_Render_AltView1.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_2T_Laboratory_Render_AltView2.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_2T_Laboratory_Render_AltView3.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `env-china`,
    coverImage: "/assets/img/environments/1M_3T_Environment_Render_View1.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/environments/1M_3T_Environment_Exploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_3T_Environment_ColorExploration.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_3T_Environment_Render_View1.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_3T_Environment_Render_View2.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/environments/1M_3T_Environment_Render.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
]

export const PROJECTS_3D = [
  {
    id: `3d-Dexter`,
    coverImage: "/assets/img/3D/2M_2T_3D_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/3D/2M_2T_3D_AposeTurnaround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_2T_Character_Clay.png',
        width: 600,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_2T_Character_Color.png',
        width: 600,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_2T_Character_Render.png',
        width: 1080,
        height: 1920
      }
    ]} 
    videos={[
      "/assets/img/3D/2M_2T_TurnAround_Clay.mp4",
      "/assets/img/3D/2M_2T_TurnAround.mp4"
    ]} />
  },
  {
    id: `3d-Katrina`,
    coverImage: "/assets/img/3D/2M_1T_Character_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items ={[
      {
        src: '/assets/img/3D/2M_1T_3D_process.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_1T_Render_Final.png',
        width: 1080,
        height: 1920
      },
    ]} 
    videos={[
      "/assets/img/3D/2M_1T_TurnAround.mp4",
    ]} />
  },
  {
    id: `3d-Miles`,
    coverImage: "/assets/img/3D/2M_1T_Miles_Render_01.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/3D/2M_1T_Miles_BlockingTurnAround.jpg',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_1T_Miles_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_1T_Miles_FaceTurnAround.jpg',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_1T_Miles_Shoes.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/2M_1T_Miles_Render_01.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
  {
    id: `3d-Bear`,
    coverImage: "/assets/img/3D/1M_2T_Render_Creature_1.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/3D/1M_2T_Render_Creature_1.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/1M_2T_Render_Creature_2.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/1M_2T_Render_Creature_4.png',
        width: 1920,
        height: 1080
      },
    ]} 
    videos={[
      "/assets/img/3D/1M_2T_3DTurnAround.mp4",
    ]} />
  },
  {
    id: `3d-hongmei`,
    coverImage: "/assets/img/3D/1M_3T_3d_Cover.png",
    titleKey: "",
    detailsComponent: <Gallery items={[
      {
        src: '/assets/img/3D/1M_3T_3d_TurnAround.png',
        width: 1920,
        height: 1080
      },
      {
        src: '/assets/img/3D/1M_3T_3d_Render.png',
        width: 1920,
        height: 1080
      },
    ]} />
  },
]

export const DIGITAL_ARTWORK = [
  {
    src: '/assets/img/artworks/mononoke.png',
    width: 874,
    height: 1240
  },
  {
    src: '/assets/img/artworks/vampire.png',
    width: 1080,
    height: 1386
  },
  {
    src: '/assets/img/artworks/yonaSpelling.png',
    width: 2000,
    height: 1600
  },
  {
    src: '/assets/img/artworks/AstridSheathe.png',
    width: 1080,
    height: 1920
  },
  {
    src: '/assets/img/artworks/sailormoonredraw.png',
    width: 2000,
    height: 1500
  },
  {
    src: '/assets/img/artworks/crosshatching.png',
    width: 1600,
    height: 2000
  },
  {
    src: '/assets/img/artworks/portraitEmerald.png',
    width: 1500,
    height: 2000
  },
  {
    src: '/assets/img/artworks/JustineFlorentinoChallenge.png',
    width: 1600,
    height: 2000
  },
  {
    src: '/assets/img/artworks/alone.png',
    width: 2000,
    height: 1500
  },
  {
    src: '/assets/img/artworks/sketches_Hands.png',
    width: 1107,
    height: 761
  },
  {
    src: '/assets/img/artworks/sketches_heads.png',
    width: 1081,
    height: 761
  },
  {
    src: '/assets/img/artworks/sketches.png',
    width: 1920,
    height: 1080
  },
  {
    src: '/assets/img/artworks/sketches_2.png',
    width: 1920,
    height: 1080
  },
]

export const TRADITIONAL_ARTWORK = [
  {
    src: '/assets/img/artworks/traditional_0025.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0027.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/sketchbook.jpg',
    width: 1173,
    height: 1161
  },
  {
    src: '/assets/img/artworks/sketchbook_0005.jpg',
    width: 934,
    height: 1240
  },
  {
    src: '/assets/img/artworks/sketchbook_0006.jpg',
    width: 1201,
    height: 1539
  },
  {
    src: '/assets/img/artworks/sketchbook_0007.jpg',
    width: 949,
    height: 1332
  },
  {
    src: '/assets/img/artworks/sketchbook_0008.jpg',
    width: 831,
    height: 1024
  },
  {
    src: '/assets/img/artworks/sketchbook_0009.jpg',
    width: 878,
    height: 1309
  },
  {
    src: '/assets/img/artworks/sketchbook_0011.jpg',
    width: 902,
    height: 1279
  },
  {
    src: '/assets/img/artworks/sketchbook_0013.jpg',
    width: 856,
    height: 1216
  },
  {
    src: '/assets/img/artworks/sketchbook_0014.jpg',
    width: 841,
    height: 1208
  },
  {
    src: '/assets/img/artworks/sketchbook_0015.jpg',
    width: 907,
    height: 1026
  },
  {
    src: '/assets/img/artworks/sketchbook_0019.jpg',
    width: 1338,
    height: 879
  },
  {
    src: '/assets/img/artworks/sketchbook_0020.jpg',
    width: 847,
    height: 1005
  },
  {
    src: '/assets/img/artworks/sketchbook_0025.jpg',
    width: 848,
    height: 828
  },
  {
    src: '/assets/img/artworks/sketchbook_0043.jpg',
    width: 1315,
    height: 1926
  },
  {
    src: '/assets/img/artworks/traditional.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0001.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0002.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0003.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0004.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0005.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0006.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0007.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/traditional_0008.jpg',
    width: 1205,
    height: 1719
  },
  {
    src: '/assets/img/artworks/sketchbook_0044.jpg',
    width: 863,
    height: 1303
  },
  {
    src: '/assets/img/artworks/Modelo_20230203_006.jpg',
    width: 1078,
    height: 989
  },
  {
    src: '/assets/img/artworks/Modelo_20230223_001.jpg',
    width: 870,
    height: 1435
  },
  {
    src: '/assets/img/artworks/Modelo_20230223_004.jpg',
    width: 991,
    height: 1048
  },
  {
    src: '/assets/img/artworks/Modelo_20230223_005.jpg',
    width: 679,
    height: 1183
  },
  {
    src: '/assets/img/artworks/Modelo_20230317_003.jpg',
    width: 1011,
    height: 1498
  },
  {
    src: '/assets/img/artworks/modelo_20230428_0001.jpg',
    width: 1115,
    height: 1914
  },
  {
    src: '/assets/img/artworks/modelo_20230428_0002.jpg',
    width: 2047,
    height: 716
  },
  {
    src: '/assets/img/artworks/modelo_20230428_0003.jpg',
    width: 998,
    height: 1442
  },
  {
    src: '/assets/img/artworks/modelo_20230428_0004.jpg',
    width: 1563,
    height: 1248
  },
  {
    src: '/assets/img/artworks/modelo_20230428_0006.jpg',
    width: 907,
    height: 1509
  },
]