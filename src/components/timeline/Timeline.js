import "./Timeline.scss";
import Star from '@mui/icons-material/Star';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { useTranslation } from "react-i18next";
import UPCLogo from "../../assets/img/Logo_UPC.png";
import SlashLogo from "../../assets/img/Logo_Slash.png";
import FXLogo from "../../assets/img/Logo_FX.png";
import { FX_LINK, SLASH_LINK, UPC_LINK } from "../../config/constants";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const CustomTimeLineElement = (props) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: '-10%'});

  return (
    <div ref={ref} className={`timeline-element ${props.position}`}>
      <TimelineItem
        position={props.position}
      >
        <TimelineOppositeContent sx={{ py: '128px', px: 2 }} color="var(--white)" className="opposite-content">
          {props.oppositeText}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Star />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '128px', px: 2 }}>
          <motion.div className="element-content"
            animate={{x: isInView ? 0 : (props.position == 'right' ? 200 : '-200px'), opacity: isInView ? 1 : 0}}
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

  return (
    <Timeline>
      <CustomTimeLineElement position='right'>
        <div className='element-content-title'>
          {t('ABOUTME.STORY.ART_START.TITLE')}
        </div>
        <div className='element-content-description'>
          {t('ABOUTME.STORY.ART_START.DESCRIPTION')}
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement position='left'>
        <div className='element-content-title'>
          {t('ABOUTME.STORY.TECH_START.TITLE')}
        </div>
        <div className='element-content-description'>
          {t('ABOUTME.STORY.TECH_START.DESCRIPTION')}
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement position='left' oppositeText={t('ABOUTME.STORY.HOBBY.TITLE')}>
        <div className='element-content-title'>
          <a href={UPC_LINK} target="_blank">
            {t('ABOUTME.STORY.COLLEGE_DEGREE.TITLE')}
          </a>
          <div className="logo-container">
            <img src={UPCLogo} />
          </div>
        </div>
        <div className='element-content-description'>
          {t('ABOUTME.STORY.COLLEGE_DEGREE.DESCRIPTION')}
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement position='left'>
        <div className='element-content-title'>
          <a href={SLASH_LINK} target="_blank">
            {t('ABOUTME.STORY.SLASHMOBILITY.TITLE')}
          </a>
          <div className="logo-container">
            <img src={SlashLogo} />
          </div>
        </div>
        <div className='element-content-description'>
          <div>
            {t('ABOUTME.STORY.SLASHMOBILITY.DESCRIPTION')}
          </div>
          <div>
            {t('ABOUTME.STORY.SLASHMOBILITY.DESCRIPTION_2')}
          </div> 
          <div>
            {t('ABOUTME.STORY.SLASHMOBILITY.DESCRIPTION_3')}
          </div>
        </div>
      </CustomTimeLineElement>
      <CustomTimeLineElement position='right'>
        <div className='element-content-title'>
          <a href={FX_LINK} target="_blank">
            {t('ABOUTME.STORY.FX_ANIMATION.TITLE')}
          </a>
          <div className="logo-container">
            <img src={FXLogo} />
          </div>
        </div>
        <div className='element-content-description'>
          {t('ABOUTME.STORY.FX_ANIMATION.DESCRIPTION')}
        </div>
      </CustomTimeLineElement>
    </Timeline>
  )
};

export default TimelineComponent;