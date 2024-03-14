import './Header.scss';
import Icon from '../icon/Icon';
import { ARTSTATION_PAGE, GITHUB_PAGE, LINKEDIN_PAGE } from '../../config/constants';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router';

const SocialIcons = () => {
  return (
    <>
      <motion.a href={LINKEDIN_PAGE} target='_blank' rel='noreferrer'>
        <Icon iconName={'fa-brands fa-linkedin'} />
      </motion.a>
      <motion.a href={GITHUB_PAGE} target='_blank' rel='noreferrer'>
        <Icon iconName={'fa-brands fa-github'} />
      </motion.a>
      <motion.a href={ARTSTATION_PAGE} target='_blank' rel='noreferrer'>
        <Icon iconName={'fa-brands fa-artstation'} />
      </motion.a>
    </>
  )
}

const HeaderBack = () => {
  const navigate = useNavigate();

  return (
    <div className='header-container back'>
      <div className='back-icon-container' onClick={() => {
        navigate("/");
      }}>
        <Icon iconName={'fa-solid fa-chevron-left'} />
      </div>
      <div className={`links-container`}>
        <SocialIcons />
      </div>
    </div>
  )
}

export default HeaderBack;