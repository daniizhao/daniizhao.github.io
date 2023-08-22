import './Header.scss';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { ReactComponent as Logo } from '../../assets/icon/logoDZ.svg';
import { NAV_SECTIONS } from '../../config/constants';
import { Link } from 'react-scroll';

const Header = () => {

  const { t } = useTranslation();

  return (
    <div className='headerContainer'>
      <div className='linksContainer'>
        <Icon iconName={'fa-brands fa-linkedin'} color={"var(--primary)"} />
        <Icon iconName={'fa-brands fa-github'} color={"var(--primary)"} />
        <Icon iconName={'fa-brands fa-artstation'} color={"var(--primary)"} />
      </div>
      <div className='logoContainer'>
        <Logo />
      </div>
      <div className='navContainer'>
        {
          NAV_SECTIONS.map((section) => {
            return (
              <Link 
                key={section.id}
                activeClass='activeLink'
                className='navItem'
                to={section.id}
                smooth={true}
              >
                {t(section.title)}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header;