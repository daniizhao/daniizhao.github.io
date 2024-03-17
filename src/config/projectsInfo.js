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
    titleKey: "Katrina",
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
    titleKey: "Dexter",
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
    titleKey: "Hong Mei",
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
    titleKey: "Mephisto",
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
    titleKey: "Sun Wukong",
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
    titleKey: "Subject BJX_07",
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
    titleKey: "Subject BJX_07",
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