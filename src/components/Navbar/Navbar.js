import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <NavLink className="Navbar__news" to="/LoL">
                News
            </NavLink>
            <NavLink className="Navbar__teams " to="/LoL/teams">
                Teams
            </NavLink>
        </div>
    );
}

export default Navbar;
