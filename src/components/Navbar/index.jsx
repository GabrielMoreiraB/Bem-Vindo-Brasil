import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <Link to='/'> Inicio</Link>
            <Link to='/MG'> MG</Link>
            <Link to='/TO'> TO</Link>
            <Link to='/RS'> RS</Link>
        </nav>
     );
}
 
export default Navbar;