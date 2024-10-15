import React, { useEffect } from "react";
//import { logoutAllTabs } from "./auth/auth";
import Router from "./appRoutes/routes";
// Translation
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useSelector } from "react-redux";

function App() {
//   useEffect(() => {
//     logoutAllTabs()
//   }, [])
    const { loading } = useSelector((state) => state.alerts);
    i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
    supportedLngs: ["en", "hi"],
    fallbackLng: "en",
    detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
    },
    backend: {
        loadPath: "/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
    });
  return (
    <>
    
     <Router />
    
    </>
  );
}
export default App;
