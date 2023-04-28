import React from "react";
import Imgs from "../components/Imgs";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import './routes.css'

const TO = () => {
    const {t} = useTranslation();
    return ( 
        <>
        <h1>Tocantins</h1>
        <div className="containercity">
            <Imgs
            url = '/img/to-aurora.jpg'
            name = 'Aurora'
            />
            <Text
            text={t('to-1')}
            />
        </div>

        <div className="containercity">
            
            <Text
            text={t('to-2')}
            />
            <Imgs
            url = '/img/to-jalapao.jpg'
            name = 'Jalapão'
            />
        </div>

        <div className="containercity">
            <Imgs
            url = '/img/to-lajeando.jpg'
            name = 'Lajeando'
            />
            <Text
            text={t('to-3')}
            />
        </div>
    </> 
    );
}
 
export default TO;