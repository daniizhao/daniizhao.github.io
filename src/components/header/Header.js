import './Header.scss';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { NAV_SECTIONS } from '../../config/constants';
import { Link, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';

const Header = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className='header-container'>
      <div className='nav-container'>
        {
          props.sections &&
          NAV_SECTIONS.map((section) => {
            return (
              <Link
                key={section.id}
                activeClass='activeLink'
                className='navItem'
                to={section.id}
                smooth={true}
                offset={-60}
                spy={true}
              >
                {t(section.title)}
              </Link>
            )
          })
        }
      </div>
      <div className='links-container'>
        <Icon iconName={'fa-brands fa-linkedin'} />
        <Icon iconName={'fa-brands fa-github'} />
        <Icon iconName={'fa-brands fa-artstation'} />
      </div>
    </div>
  )
}

export default Header;