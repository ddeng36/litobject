import React from "react";
import "./Navlist.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navlist = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="navlist">
      <ul>
        <li>
          <Link to="/">{t("navlist.home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navlist.about")}</Link>
        </li>
        <li>
          <Link to="/projects">{t("navlist.projects")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlist;
