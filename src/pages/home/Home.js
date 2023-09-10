import "./Home.scss";
import Header from "../../components/header/Header";
import { NAV_SECTIONS } from "../../config/constants";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div id="portfolio-content" className="home-wrapper">
      <Header />
      <div className="background-wrapper general-bkg">
        <img src="assets/img/Portfolio_bkg.png" alt="bkg_image" />
      </div>
      <div className="content-wrapper">
        {
          NAV_SECTIONS.map((section) => {
            return (
              <Element key={section.id} name={section.id} className='content-container'>
                {section.component}
              </Element>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;