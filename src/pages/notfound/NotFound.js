import "./NotFound.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import { PRIMARY_BUTTON } from "../../config/constants";
import { useNavigate } from "react-router";

const NotFound = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="not-found-content">
        <div className="not-found-title">
          {t('NOT_FOUND.TITLE')}
        </div>
        <div className='button-container'>
          <Button style={PRIMARY_BUTTON} buttonText={t('NOT_FOUND.BACK_HOME')} onClick={() => {
            navigate('/');
          }} />
        </div>
      </div>
    </div>
  )
};

export default NotFound;