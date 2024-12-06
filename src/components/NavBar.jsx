import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink
            to="/"
            className="nav-link"
            >
            Home
            </NavLink>
            <NavLink
            to="/teams"
            className="nav-link"
            >
            Teams
            </NavLink>
            <NavLink
            to="/circuits"
            className="nav-link"
            >
            Circuits
            </NavLink>
        </nav>
    );
};

export default NavBar;