import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./en.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
.use(LanguageDetector)
.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: en
  }
})

export default i18n;