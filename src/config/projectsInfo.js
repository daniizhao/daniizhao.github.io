import PlaceholderImage from "../assets/img/keyboard.jpg";
import BreakInCover from "../assets/img/BreakIn_Cover.png";
import QompCover from "../assets/img/AmongUs_Cover.png";
import PortfolioCover from "../assets/img/Portfolio_Cover.png";
import LabCover from "../assets/img/Lab_Cover.png";
import FairytaleCover from "../assets/img/FairyTale_ZhaoDaniela_Cover.png";
import PersonalCover from "../assets/img/artworks/yonaSpelling.png";


export const TECH_PROJECTS = [
  {
    id: `tech-0`,
    coverImage: PlaceholderImage,
    titleKey: "PROJECTS.COMPRESSOR.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DEVELOPMENT",
      "Java",
      "UPC",
    ],
    detailsComponent: null
  },
  {
    id: `tech-1`,
    coverImage: BreakInCover,
    titleKey: "PROJECTS.BREAKIN.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DEVELOPMENT",
      "PROJECTS.TAGS.GAME",
      "OpenGL",
      "2D",
      "UPC",
    ],
    detailsComponent: null
  },
  {
    id: `tech-2`,
    coverImage: QompCover,
    titleKey: "PROJECTS.QOMP.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DEVELOPMENT",
      "PROJECTS.TAGS.GAME",
      "Unity",
      "3D",
      "UPC",
    ],
    detailsComponent: null
  },
  {
    id: `tech-3`,
    coverImage: PortfolioCover,
    titleKey: "PROJECTS.PORTFOLIO.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DEVELOPMENT",
      "PROJECTS.TAGS.GAME",
      "Unity",
      "3D",
    ],
    detailsComponent: null
  },
];

export const ART_PROJECTS = [
  {
    id: `art-0`,
    coverImage: PersonalCover,
    titleKey: "PROJECTS.PERSONAL.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D",
    ],
    detailsComponent: null
  },
  {
    id: `art-1`,
    coverImage: PersonalCover,
    titleKey: "PROJECTS.TRADITIONAL.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.TRADITIONAL",
      "2D",
    ],
    detailsComponent: null
  },
  {
    id: `art-2`,
    coverImage: LabCover,
    titleKey: "PROJECTS.LABORATORY.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D & 3D",
      "FX Animation",
    ],
    detailsComponent: null
  },
  {
    id: `art-3`,
    coverImage: FairytaleCover,
    titleKey: "PROJECTS.FAIRYTALE.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D & 3D",
      "FX Animation",
    ],
    detailsComponent: null
  },
];