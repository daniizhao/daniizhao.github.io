import { useTranslation } from "react-i18next";

const Aboutme = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('ABOUTME.TITLE')}</h1>
    </div>
  )
}

export default Aboutme;