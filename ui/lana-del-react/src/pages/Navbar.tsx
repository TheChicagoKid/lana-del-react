import { Link } from "react-router-dom";
import '../styles/Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">Lana Del Rey Discography</Link>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/llama">LLama Del Rey</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;