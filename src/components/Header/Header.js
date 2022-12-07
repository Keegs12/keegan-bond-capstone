import React from "react";
import EsportsHubLogo from "../../assets/logo/EsportsLogo.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <div className="Header">
            <img src={EsportsHubLogo} alt="website logo"></img>
            <div className="Header__nav">
                <Link className="Header__links" to="/">
                    Home
                </Link>
                <Link to="/">About</Link>
                <Link to="/">Sign Up</Link>
            </div>
        </div>
    );
}

export default Header;
