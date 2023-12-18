// import PlaceholderImage from "../assets/img/keyboard.jpg";
import FairyTaleDetails from "../components/projectDetails/creative/FairytaleDetails";
import CompressorDetails from "../components/projectDetails/technological/CompressorDetails";
import BreakInDetails from "../components/projectDetails/technological/BreakInDetails";
import QompDetails from "../components/projectDetails/technological/QompDetails";
import PortfolioDetails from "../components/projectDetails/technological/WebsitePortfolio";
import TraditionalDetails from "../components/projectDetails/creative/TraditionalDetails";
import LaboratoryDetails from "../components/projectDetails/creative/LaboratoryDetails";
import DigitalDetails from "../components/projectDetails/creative/DigitalDetails";
import CastleDetails from "../components/projectDetails/creative/CastleDetails";


export const TECH_PROJECTS = [
  {
    id: `tech-0`,
    coverImage: "assets/img/Compressor.png",
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
    coverImage: "assets/img/BreakIn_Cover.png",
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
    coverImage: "assets/img/AmongUs_Cover.png",
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
    coverImage: "assets/img/Portfolio_Cover.png",
    titleKey: "PROJECTS.PORTFOLIO.TITLE",
    tagsKey: [
      "Web",
      "PROJECTS.TAGS.DEVELOPMENT",
      "PROJECTS.TAGS.DESIGN",
    ],
    detailsComponent: <PortfolioDetails />
  },
];

export const ART_PROJECTS = [
  {
    id: `art-2`,
    coverImage: "assets/img/Lab_Cover.png",
    titleKey: "PROJECTS.LABORATORY.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D & 3D",
      "FX Animation",
    ],
    detailsComponent: <LaboratoryDetails />
  },
  {
    id: `art-3`,
    coverImage: "assets/img/FairyTale_ZhaoDaniela_Cover.png",
    titleKey: "PROJECTS.FAIRYTALE.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D & 3D",
      "FX Animation",
    ],
    detailsComponent: <FairyTaleDetails />
  },
  {
    id: `art-4`,
    coverImage: "assets/img/Castle_Cover.png",
    titleKey: "PROJECTS.CASTLE.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D & 3D",
      "FX Animation",
    ],
    detailsComponent: <CastleDetails />
  },
  {
    id: `art-1`,
    coverImage: "assets/img/artworks/traditional_cover.jpg",
    titleKey: "PROJECTS.TRADITIONAL.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.TRADITIONAL",
      "2D",
    ],
    detailsComponent: <TraditionalDetails />
  },
  {
    id: `art-0`,
    coverImage: "assets/img/artworks/yonaSpelling.png",
    titleKey: "PROJECTS.DIGITAL.TITLE",
    tagsKey: [
      "PROJECTS.TAGS.DIGITAL",
      "2D",
    ],
    detailsComponent: <DigitalDetails />
  },
];