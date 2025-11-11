import { useTranslation } from 'react-i18next'
import './App.css'
import "./i18n"

function App() {
  const {t, i18n} = useTranslation()
  const changeLanguage = lang => i18n.changeLanguage(lang)
  console.log(i18n.language)
  return (
    <>
     <h1>{t("welcome.title")}</h1>
     <p>{t("welcome.description")} <a href="https://github.com/professor-correa/i18next-vite-js">{t("welcome.link")}</a></p>
     <button onClick={() => changeLanguage("pt")}>pt</button>
     <button onClick={() => changeLanguage("en")}>en</button>
    </>
  )
}

export default App
