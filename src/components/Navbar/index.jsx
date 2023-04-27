import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const {t} = useTranslation();
    return ( 
        <nav>
            <NavLink to='/' className={({ isActive }) => `
            link ${isActive ? 'linkdestacado' : ""}`}> {t('home')}</NavLink>
            <NavLink to='/MG' className={({ isActive }) => `
            link ${isActive ? 'linkdestacado' : ""}`}> MG</NavLink>
            <NavLink to='/TO' className={({ isActive }) => `
            link ${isActive ? 'linkdestacado' : ""}`}> TO</NavLink>
            <NavLink to='/RS' className={({ isActive }) => `
            link ${isActive ? 'linkdestacado' : ""}`}> RS</NavLink>
        </nav>
     );
}
 
export default Navbar;