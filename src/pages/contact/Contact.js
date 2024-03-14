import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import Icon from "../../components/icon/Icon";
import { ART_CONTACT_INFO, COMMON_CONTACT_INFO, TECH_CONTACT_INFO } from "../../config/contactInfo";
import { motion } from "framer-motion";
import { useContext } from "react";
import { IsMobileSizeContext } from "../../App";

const handleContactClick = (url, filePath) => {
  if (url === 'pdf') {
    const link = document.createElement('a');
    link.download = 'CV_Daniela_Zhao';
    link.href = filePath;
    link.click();
  } else {
    window.open(url, "_blank");
  }
};

const ContactItem = (props) => {
  return (
    <motion.div className="contact-item" whileHover={{ scale: 1.05, cursor: 'pointer' }} onClick={() => {
      handleContactClick(props.contact.url, props.contact.filePath ?? '')
    }}>
      <div className="contact-item-icon">
        <Icon iconName={props.contact.icon} color='var(--secondary)' />
      </div>
      <div className="contact-item-name">
        {props.contact.name}
      </div>
    </motion.div>
  )
};

const Contact = () => {

  const { t } = useTranslation();
  const isMobile = useContext(IsMobileSizeContext);

  return (
    <div id={NAV_SECTIONS[2].id} className="section-wrapper contact-wrapper">
      <div className="background-wrapper">
        <img id='contactImg' src="/assets/img/Contact_bkg.png" alt="bkg_image" />
        <div className="bkg-overlay"></div>
      </div>
      <div className="section-title">
        {t('CONTACT.SUBTITLE')}
      </div>
      <div className="contact-container">
        <div className={`contact-container-side ${!isMobile && 'align-right'}`}>
          {
            TECH_CONTACT_INFO.map((info) => {
              return (
                <ContactItem key={info.id} contact={info} />
              )
            })
          }
        </div>
        {
          isMobile && (
            <div className='separator-container'>
              <div className='separator-line'></div>
              <div className='separator'>&</div>
              <div className='separator-line'></div>
            </div>
          )
        }
        <div className="contact-container-side">
          {
            ART_CONTACT_INFO.map((info) => {
              return (
                <ContactItem key={info.id} contact={info} />
              )
            })
          }
        </div>
      </div>
      <div className="contact-container common">
        {
          COMMON_CONTACT_INFO.map((info) => {
            return (
              <ContactItem key={info.id} contact={info} />
            )
          })
        }
      </div>
      <div className="footer-wrapper">
        <div>
          {`Made with ♡ in 2023`} 
        </div>
      </div>
    </div>
  )
}

export default Contact;