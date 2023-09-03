import { useTranslation } from "react-i18next";
import { NAV_SECTIONS } from "../../config/constants";

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div id={NAV_SECTIONS[3].id}>
      <h1>{t('CONTACT.TITLE')}</h1>
    </div>
  )
}

export default Contact;