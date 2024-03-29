import "./Timeline.scss";
import Star from '@mui/icons-material/Star';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from "@mui/lab";
import { useTranslation } from "react-i18next";
import { FX_LINK, SLASH_LINK, UPC_LINK } from "../../config/constants";
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import { IsMobileSizeContext } from "../../App";

const CustomTimeLineElement = (props) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: '-10%'});
  const isMobile = useContext(IsMobileSizeContext);

  return (
    <div ref={ref} className={`timeline-element ${props.position}`}>
      <TimelineItem
        position={isMobile ? 'right' : props.position}
      >
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Star />
          </TimelineDot>
          <TimelineConnector />
          {
            props.first &&
            <TimelineDot>
              <Star />
            </TimelineDot>
          }
        </TimelineSeparator>
        <TimelineContent sx={{ py: isMobile ? '64px' : '128px', px: 2 }}>
          <motion.div className="element-content"
            animate={{x: isInView ? 0 : ((props.position === 'right' || isMobile) ? 200 : '-200px'), opacity: isInView ? 1 : 0}}
            transition={{ease: 'easeIn', duration: 0.5}}
          >
            {props.children}
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </div>
  )
};

const TimelineComponent = () => {

  const { t } = useTranslation();
  const isMobile = useContext(IsMobileSizeContext);

  const openLink = (link) => {
    window.open(link, '_blank', 'noreferrer');
  };

  return (
    <Timeline 
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: isMobile ? 0 : 'auto',
          padding: isMobile ? 0 : 'auto',
        },
      }}
    >
      {/* <CustomTimeLineElement position='right'>
        <div className='element-content-title' onClick={() => {openLink(SCRUFFY_LINK)}}>
          {t('ABOUTME.STORY.SCRUFFYDOG.TITLE')}
        </div>
        <div className='element-content-subtitle'>
          2024 - present
        </div>
        <div className='element-content-description'>
          <div>
            {t('ABOUTME.STORY.SCRUFFYDOG.DESCRIPTION')}
          </div>
          <div>
            {t('ABOUTME.STORY.SCRUFFYDOG.DESCRIPTION_2')}
          </div>
          <div className="element-content-description-stack">
            {t('ABOUTME.STORY.SCRUFFYDOG.STACK')}
          </div>
        </div>
      </CustomTimeLineElement> */}
      <CustomTimeLineElement position='right'>
        <div className='element-content-title' onClick={() => {openLink(FX_LINK)}}>
          {t('ABOUTME.STORY.FX_ANIMATION.TITLE')}
          <div className='logo-container'>
            <img src="/assets/img/Logo_FX.png" alt='FXAnimation_logo' />
          </div>
        </div>
        <div className='element-content-subtitle'>
          2022 - present
        </div>
        <div className='element-content-description'>
          <div>
            {t('ABOUTME.STORY.FX_ANIMATION.DESCRIPTION')}
          </div>
          <div>
            {t('ABOUTME.STORY.FX_ANIMATION.DESCRIPTION_2')}
          </div>
          <div className="element-content-description-stack">
            {t('ABOUTME.STORY.FX_ANIMATION.STACK')}
          </div>
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement position='left'>
        <div className='element-content-title' onClick={() => {openLink(SLASH_LINK)}}>
          {t('ABOUTME.STORY.SLASHMOBILITY.TITLE')}
          <div className='logo-container'>
            <img src="/assets/img/Logo_Slash.png" alt='SlashMobility_logo' />
          </div>
        </div>
        <div className='element-content-subtitle'>
          2020 - 2023
        </div>
        <div className='element-content-description'>
          <div>
            {t('ABOUTME.STORY.SLASHMOBILITY.DESCRIPTION')}
          </div>
          <div>
            {t('ABOUTME.STORY.SLASHMOBILITY.DESCRIPTION_2')}
          </div> 
          <div className="element-content-description-stack">
            {t('ABOUTME.STORY.SLASHMOBILITY.STACK')}
          </div>
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement first={true} position='left'>
        <div className='element-content-title' onClick={() => {openLink(UPC_LINK)}}>
          {t('ABOUTME.STORY.COLLEGE_DEGREE.TITLE')}
          <div className='logo-container'>
            <img src="/assets/img/Logo_UPC.png" alt='UPC_logo' />
          </div>
        </div>
        <div className='element-content-subtitle'>
          2017 - 2021
        </div>
        <div className='element-content-description'>
          <div>
            {t('ABOUTME.STORY.COLLEGE_DEGREE.DESCRIPTION')}
          </div>
          <div className="element-content-description-stack">
            {t('ABOUTME.STORY.COLLEGE_DEGREE.STACK')}
          </div>
        </div>
      </CustomTimeLineElement>
    </Timeline>
  )
};

export default TimelineComponent;