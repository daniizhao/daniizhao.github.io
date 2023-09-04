import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import { ART_SKILLS_INFO, LANGUAGES_INFO, SKILL_LEVELS_LIST, TECH_SKILLS_INFO } from "../../config/skillsInfo";
import "./Skills.scss";
import Icon from "../../components/icon/Icon";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillBar = (props) => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={`skills-list-content-row-levels skill-bar ${props.isLeftSide && 'align-right'}`}>
    <motion.div 
      className="skill-progress"
      animate={{width: isInView ? `${props.level}%` : 0, opacity: isInView ? 1 : 0}}
      transition={{type:'spring', duration: 1}}
    ></motion.div>
  </div>
  )
}

const SkillsList = (props) => {

  const { t } = useTranslation();
  const isLeftSide = props.position === 'left';

  const getPercFromLvl = (lvlId) => {
    return SKILL_LEVELS_LIST.find(skill => skill.id === lvlId).perc;
  };

  return (
    <div className={`skills-list ${isLeftSide && 'align-right'}`}>
      <div className={`skills-list-header ${isLeftSide && 'align-right'}`}>
        { !isLeftSide &&
          <div className="skills-list-header-icon skill-name">
            <Icon iconName={`fa-solid ${props.iconName}`} color='var(--secondary)'/>
          </div>
        }
        <div className={`skills-list-header-levels skill-bar ${isLeftSide && 'align-right'}`}>
          {
            props.levels.map((level, i) => {
              return (
                <div key={`skill-level-${i}${isLeftSide ? '-left' : ''}`} className="skills-list-header-levels-title">
                  {t(level.titleKey)}
                </div>
              )
            })
          }
        </div>
        {
          isLeftSide &&
          <div className="skills-list-header-icon skill-name">
            <Icon iconName={`fa-solid ${props.iconName}`} color='var(--secondary)'/>
          </div>
        }
      </div>
      <div className="skills-list-content">
        {
          props.list.map((skill, i) => {
            return (
              <div key={`skill-${i}`} className="skills-list-content-row">
                {
                  !isLeftSide &&
                  <div className="skills-list-content-row-title skill-name align-right">
                    {skill.title}
                  </div>
                }
                {
                  skill.lvl_id !== null &&
                  <SkillBar level={getPercFromLvl(skill.lvl_id)} isLeftSide={isLeftSide} />
                }
                {
                  isLeftSide &&
                  <div className="skills-list-content-row-title skill-name">
                    {skill.title}
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

const Skills = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[1].id} className="section-wrapper">
      <div className="skills-wrapper">
        <div className="section-title">
          {t('SKILLS.TITLE')}
        </div>
        <div className="skills-hard-container">
          <SkillsList list={TECH_SKILLS_INFO} levels={SKILL_LEVELS_LIST.slice().reverse()} position='left' iconName='fa-code' />
          <SkillsList list={ART_SKILLS_INFO} levels={SKILL_LEVELS_LIST} iconName='fa-palette'/>
        </div>
        <div className="skills-soft-container">
          <div className="skills-item">
            <div className="section-title">
              {t('SKILLS.OTHER.TITLE')}
            </div>
            <div className="skills-item-content">
              <div className="skills-item-content-row">
                <div className="skills-item-content">
                  {t('SKILLS.OTHER.TEAMWORK')}
                </div>
              </div>
              <div className="skills-item-content-row">
                <div className="skills-item-content">
                  {t('SKILLS.OTHER.COMM')}
                </div>
              </div>
              <div className="skills-item-content-row">
                <div className="skills-item-content">
                  {t('SKILLS.OTHER.DETAILS')}
                </div>
              </div>
            </div>
          </div>
          <div className="skills-item">
            <div className="section-title">
              {t('SKILLS.LANGUAGES.TITLE')}
            </div>
            <div className="skills-item-content">
              {
                LANGUAGES_INFO.map((lang, i) => {
                  return (
                    <div key={`lang-${i}`} className="skills-item-content-row">
                      <div className="skills-item-content-key">
                        {lang.lang} <span>({lang.code})</span>
                      </div>
                      <div className="skills-item-content-value">
                        {t(lang.lvl)}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="skills-item">
            <div className="section-title">
              {t('SKILLS.HOBBIES.TITLE')}
            </div>
            <div className="skills-item-content">
              <div className="skills-item-content-row">
                <div className="skills-item-content-icon">
                  <Icon iconName='fa-regular fa-moon' color='var(--secondary)' />
                </div>
                <div className="skills-item-content-key align-left">
                  {t('SKILLS.HOBBIES.SHELTER')}<a href="https://www.instagram.com/ubgats" target="_blank" rel="noreferrer"> UBGats </a>
                </div>
              </div>
              <div className="skills-item-content-row">
                <div className="skills-item-content-icon">
                  <Icon iconName='fa-regular fa-moon' color='var(--secondary)' />
                </div>
                <div className="skills-item-content-key align-left">
                  {t('SKILLS.HOBBIES.GAMES')}
                </div>
              </div>
              <div className="skills-item-content-row">
                <div className="skills-item-content-icon">
                  <Icon iconName='fa-regular fa-moon' color='var(--secondary)' />
                </div>
                <div className="skills-item-content-key align-left">
                  {t('SKILLS.HOBBIES.READING')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;