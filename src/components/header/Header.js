import './Header.scss';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { ARTSTATION_PAGE, GITHUB_PAGE, LINKEDIN_PAGE, NAV_SECTIONS } from '../../config/constants';
import { Link, scrollSpy } from 'react-scroll';
import { useContext, useEffect } from 'react';
import { AppSizeContext } from '../../App';

const Header = () => {

  const { t } = useTranslation();
  const isMobile = useContext(AppSizeContext);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className='header-container'>
      <div className='nav-container'>
        {
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
        <a href={LINKEDIN_PAGE} target='_blank' rel='noreferrer'>
          <Icon iconName={'fa-brands fa-linkedin'} />
        </a>
        <a href={GITHUB_PAGE} target='_blank' rel='noreferrer'>
          <Icon iconName={'fa-brands fa-github'} />
        </a>
        <a href={ARTSTATION_PAGE} target='_blank' rel='noreferrer'>
          <Icon iconName={'fa-brands fa-artstation'} />
        </a>
      </div>
    </div>
  )
}

export default Header;