import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <Link>News</Link>
            <Link to="/LoL/teams">Teams</Link>
        </div>
    );
}

export default Navbar;
