import { NavLink } from "react-router-dom";

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
        </nav>
    );
};

export default NavBar;