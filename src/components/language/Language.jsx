import React, { useContext } from "react";
import "./Language.scss";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { i18n } = useTranslation();

  const handleLanguageToggle = (lang) => {
    toggleLanguage(lang);
    i18n.changeLanguage(lang); // Update the i18n language
  };

  return (
    <div className="language">
      <div className="lng-btn" onClick={() => handleLanguageToggle("en")}>
        English
      </div>
      <div className="border">|</div>
      <div className="lng-btn" onClick={() => handleLanguageToggle("cn")}>
        中文
      </div>
    </div>
  );
};

export default Language;
