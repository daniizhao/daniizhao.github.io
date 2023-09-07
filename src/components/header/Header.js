import './Header.scss';
import { useTranslation } from 'react-i18next';
import Icon from '../icon/Icon';
import { ARTSTATION_PAGE, GITHUB_PAGE, LINKEDIN_PAGE, NAV_SECTIONS } from '../../config/constants';
import { Link, scrollSpy } from 'react-scroll';
import { useContext, useEffect, useRef } from 'react';
import { IsMobileSizeContext } from '../../App';
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../../components/menuToggle/MenuToggle.js";
import useScrollBlock from '../../utils/useScrollBlock';

const NavItem = (props) => {

  const { t } = useTranslation();

  return (
    <Link
      activeClass='activeLink'
      className='navItem'
      to={props.section.id}
      smooth={true}
      offset={-60}
      spy={true}
      onClick={() => {props.toggle(false)}}
    >
      {t(props.section.title)}
    </Link>
  )
}

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

const DesktopHeader = () => {
  const { t } = useTranslation();

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
      <div className={`links-container`}>
        <SocialIcons />
      </div>
    </div>
  )
}

const MobileHeader = () => {
  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(25px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useRef(0);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isOpen) blockScroll();
    else allowScroll();
  }, [isOpen, blockScroll, allowScroll]);

  return (
    <motion.div
      className={`mobile-menu ${isOpen ? 'opened-menu' : 'closed-menu'}`}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={`mobile-menu-background ${isOpen ? 'opened-menu' : 'closed-menu'}`} variants={sidebarVariants}></motion.div>
      <div className={`mobile-menu-container  ${isOpen ? 'opened-menu' : 'closed-menu'}`}>
        <motion.ul variants={containerVariants}>
          {
            NAV_SECTIONS.map((section) => {
              return (
                <motion.li
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <NavItem section={section} toggle={toggleOpen} />
                </motion.li>
              )
            })
          }
        </motion.ul>
        <motion.div className='mobile-menu-social-container' variants={itemVariants}>
          <SocialIcons />
        </motion.div>
      </div>
      <MenuToggle toggle={toggleOpen} />
    </motion.div>
  )
}

const Header = () => {

  const isMobile = useContext(IsMobileSizeContext);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    isMobile ? <MobileHeader /> : <DesktopHeader />
  )
}

export default Header;