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
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D",
    ],
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
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D",
    ],
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
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D",
    ],
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