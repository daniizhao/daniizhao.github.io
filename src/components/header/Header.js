import './Header.scss';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { ReactComponent as Logo } from '../../assets/icon/logoDZ.svg';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/' className={({ isActive }) =>
          isActive ? 'activeLink' : 'navLink'
        }>
          {t('ABOUTME.TITLE')}
        </NavLink>
        <NavLink to='/work' className={({ isActive }) =>
          isActive ? 'activeLink' : 'navLink'
        }>
          {t('WORK.TITLE')}
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) =>
          isActive ? 'activeLink' : 'navLink'
        }>
          {t('CONTACT.TITLE')}
        </NavLink>
      </div>
    </div>
  )
}

export default Header;