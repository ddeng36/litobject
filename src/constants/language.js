import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "cn",
  debug: false,
  resources: {
    en: {
      translation: {
        navlist: {
          home: "Home",
          about: "About",
          projects: "Projects",
        },
      },
    },
    cn: {
      translation: {
        navlist: {
          home: "首页",
          about: "关于我们",
          projects: "案例",
        },
      },
    },
  },
});
export default i18n;
