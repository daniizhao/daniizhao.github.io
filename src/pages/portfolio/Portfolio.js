import './Portfolio.scss';
import { Element } from 'react-scroll';
import { NAV_SECTIONS } from '../../config/constants';
import Header from '../../components/header/Header';

const Portfolio = () => {
  return (
    <div>
      <Header sections={true} />
      <div className='content-wrapper'>
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

export default Portfolio;