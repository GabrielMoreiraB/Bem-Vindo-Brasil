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
            <Imgs/>
            <Text
            text={t('mg-1')}
            />
            </div>
        </>
     );
}
 
export default MG;