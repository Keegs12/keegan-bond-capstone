import React from "react";
import EsportsHubLogo from "../../assets/logo/logo-no-background.png";
import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ userData }) {
    return (
        <div className="Header">
            <div className="Header__image-container">
                <Link to="/">
                    <img
                        className="Header__logo"
                        src={EsportsHubLogo}
                        alt="website logo"
                    ></img>
                </Link>
            </div>
            <div className="Header__nav">
                <Link className="Header__links" to="/">
                    Home
                </Link>
                <Link className="Header__links" to="/About">
                    About
                </Link>
                <Link
                    className={
                        userData ? "Header__links --hidden" : "Header__links"
                    }
                    to="/users/signup"
                >
                    Sign Up
                </Link>
                <Link
                    className={
                        userData ? "Header__links --hidden" : "Header__links"
                    }
                    to="/users/login"
                >
                    Log In
                </Link>
                <Link
                    className={
                        userData ? "Header__links" : "Header__profile --hidden"
                    }
                    to="/profile"
                >
                    Profile
                </Link>
            </div>
        </div>
    );
}

export default Header;
