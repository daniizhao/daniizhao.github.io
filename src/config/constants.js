import Aboutme from "../pages/aboutme/Aboutme";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";

export const NAV_SECTIONS = [
  {
    id: 'aboutme',
    title: 'ABOUTME.TITLE',
    component: <Aboutme />
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