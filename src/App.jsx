
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'
import { useState } from 'react';



function App() {

  const {t, i18n: {changeLanguage, language}} = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage)
  }

  return (
    <div className="App">
      <h1>{t('title')}</h1>
      <button type='button' onClick={handChangeLanguage}>{t('button')}</button>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default App
