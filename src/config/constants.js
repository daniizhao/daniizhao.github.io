import Aboutme from "../pages/aboutme/Aboutme";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skill/Skills";

export const NAV_SECTIONS = [
  {
    id: 'aboutme',
    title: 'ABOUTME.TITLE',
    component: <Aboutme />
  },
  {
    id: 'skills',
    title: 'SKILLS.TITLE',
    component: <Skills />
  },
  {
    id: 'projects',
    title: 'PROJECTS.TITLE',
    component: <Projects />
  },
  {
    id: 'contact',
    title: 'CONTACT.TITLE',
    component: <Contact />
  },
];

export const PRIMARY_BUTTON = 'primary';

export const LINKEDIN_PAGE = 'https://www.linkedin.com/in/daniela-zhao/';
export const GITHUB_PAGE = 'https://github.com/daniizhao';
export const ARTSTATION_PAGE = 'https://www.artstation.com/nydalae';

export const UPC_LINK = "https://www.upc.edu/en/bachelors/informatics-engineering-barcelona-fib";
export const SLASH_LINK = "https://slashmobility.com/?lang=en";
export const FX_LINK = "https://fxanimation.es/en/superior-master-in-modeling-and-concept-art/";