import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('CONTACT.TITLE')}</h1>
    </div>
  )
}

export default Contact;