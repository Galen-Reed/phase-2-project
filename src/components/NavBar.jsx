import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar-new">
            <img className="f1-logo" src='https://w7.pngwing.com/pngs/512/612/png-transparent-mercedes-amg-petronas-f1-team-2018-fia-formula-one-world-championship-abu-dhabi-grand-prix-logo-red-bull-racing-f1-logo-angle-text-rectangle-thumbnail.png' />
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