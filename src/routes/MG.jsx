import React from "react";
import Imgs from "../components/Imgs";
import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import './routes.css'

const MG = () => {
    const {t} = useTranslation();
    return ( 
        <>
            <h1>Minas Gerais</h1>
            <div className="containercity">
                <Imgs
                url = '/img/mg-bh.jpg'
                name = 'Belo Horizonte'
                />
                <Text
                text={t('mg-1')}
                />
            </div>

            <div className="containercity">
                
                <Text
                text={t('mg-2')}
                />
                <Imgs
                url = '/img/mg-cap.jpg'
                name = 'Capitólio'
                />
            </div>

            <div className="containercity">
                <Imgs
                url = '/img/mg-op.jpg'
                name = 'Ouro Preto'
                />
                <Text
                text={t('mg-3')}
                />
            </div>
        </>
     );
}
 
export default MG;