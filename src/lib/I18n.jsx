import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslations from '../assets/locale/pt.json';
import enTranslations from '../assets/locale/en.json';

i18n.use(initReactI18next).init({
    resources: {
        en:{
            ...enTranslations
        },
        pt:{
            ...ptTranslations
        },
    },
    lng:'pt',
})