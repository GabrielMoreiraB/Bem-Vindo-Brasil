import React from "react";
import Imgs from "../components/Imgs";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import './routes.css'

const RS = () => {
    const {t} = useTranslation();
    return ( 
        <>
        <h1>Rio Grande do Sul</h1>
        <div className="containercity">
            <Imgs
            url = '/img/rs-1.jpg'
            name = 'Porto Alegre'
            />
            <Text
            text={t('rs-1')}
            />
        </div>

        <div className="containercity">
            
            <Text
            text={t('rs-2')}
            />
            <Imgs
            url = '/img/rs-canela.jpg'
            name = 'Gramado e Canela'
            />
        </div>

        <div className="containercity">
            <Imgs
            url = '/img/rs-garibaldi.jpg'
            name = 'Garibaldi'
            />
            <Text
            text={t('rs-3')}
            />
        </div>
    </> 
    );
}
 
export default RS;