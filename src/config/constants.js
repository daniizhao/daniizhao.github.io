import Aboutme from "../pages/aboutme/Aboutme";
import Contact from "../pages/contact/Contact";
import Work from "../pages/work/Work";

export const NAV_SECTIONS = [
  {
    id: 'aboutme',
    title: 'ABOUTME.TITLE',
    component: <Aboutme />
  },
  {
    id: 'work',
    title: 'WORK.TITLE',
    component: <Work />
  },
  {
    id: 'contact',
    title: 'CONTACT.TITLE',
    component: <Contact />
  },
]

export const PRIMARY_BUTTON = 'primary';