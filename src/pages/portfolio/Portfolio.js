import './Portfolio.scss';
import { Element } from 'react-scroll';
import { NAV_SECTIONS } from '../../config/constants';
import Header from '../../components/header/Header';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className='contentWrapper'>
        {
          NAV_SECTIONS.map((section) => {
            return (
              <Element key={section.id} name={section.id} className='contentContainer'>
                {section.component}
              </Element>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio;