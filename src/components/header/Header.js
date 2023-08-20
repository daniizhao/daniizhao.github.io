import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {

  const { t } = useTranslation();

  return (
    <div className='headerContainer'>
      <div className='linksContainer'>

      </div>
      <div className='logoContainer'>
        
      </div>
      <div className='navContainer'>
        <a>{t('HEADER.ABOUTME')}</a>
        <a>{t('HEADER.WORK')}</a>
        <a>{t('HEADER.CONTACT')}</a>
      </div>
    </div>
  )
}

export default Header;