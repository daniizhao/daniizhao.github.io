import { useTranslation } from 'react-i18next';
import './Header.css';
import Icon from '../icon/Icon';
import { ReactComponent as Logo } from '../../assets/icon/logoDZ.svg';

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
        <button>{t('HEADER.ABOUTME')}</button>
        <button>{t('HEADER.WORK')}</button>
        <button>{t('HEADER.CONTACT')}</button>
      </div>
    </div>
  )
}

export default Header;