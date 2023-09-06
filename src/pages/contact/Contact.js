import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";
import ContactImage from "../../assets/img/Contact_bkg.png";
import Icon from "../../components/icon/Icon";
import { ART_CONTACT_INFO, TECH_CONTACT_INFO } from "../../config/contactInfo";
import { motion } from "framer-motion";

const handleContactClick = (url) => {
  window.open(url, "_blank");
};

const ContactItem = (props) => {
  return (
    <motion.div className="contact-item" whileHover={{ scale: 1.05, cursor: 'pointer' }} onClick={() => {
      handleContactClick(props.contact.url)
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

  return (
    <div id={NAV_SECTIONS[3].id} className="section-wrapper contact-wrapper">
      <div className="background-wrapper">
        <img id='contactImg' src={ContactImage} alt="bkg_image" />
      </div>
      <div className="section-title">
        {t('CONTACT.SUBTITLE')}
      </div>
      <div className="contact-container">
        <div className="contact-container-side align-right">
          {
            TECH_CONTACT_INFO.map((info) => {
              return (
                <ContactItem key={info.id} contact={info} />
              )
            })
          }
        </div>
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
      <div className="footer-wrapper">
        <div>
          {`Made with ♡ in 2023`} 
        </div>
      </div>
    </div>
  )
}

export default Contact;