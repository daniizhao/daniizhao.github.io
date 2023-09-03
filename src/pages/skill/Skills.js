import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import { ART_SKILLS_INFO, SKILL_LEVELS_LIST, TECH_SKILLS_INFO } from "../../config/skills-info";
import "./Skills.scss";
import Icon from "../../components/icon/Icon";

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
                  <div className={`skills-list-content-row-levels skill-bar ${isLeftSide && 'align-right'}`}>
                    <div className="skill-progress" style={{width: `${getPercFromLvl(skill.lvl_id)}%`}}></div>
                  </div>
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
      <div className="section-title">{t('SKILLS.TITLE')}</div>
      <div className="skills-wrapper">
        <div className="skills-hard-container">
          <SkillsList list={TECH_SKILLS_INFO} levels={SKILL_LEVELS_LIST.slice().reverse()} position='left' iconName='fa-code' />
          <SkillsList list={ART_SKILLS_INFO} levels={SKILL_LEVELS_LIST} iconName='fa-palette'/>
        </div>
        <div className="skills-soft-container">

        </div>
      </div>
    </div>
  )
};

export default Skills;