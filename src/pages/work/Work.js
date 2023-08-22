import { useTranslation } from "react-i18next";

const Work = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('WORK.TITLE')}</h1>
    </div>
  )
}

export default Work;