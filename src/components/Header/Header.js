import React from "react";
import EsportsHubLogo from "../../assets/logo/EsportsLogo.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";
function Header({ userData }) {
    return (
        <div className="Header">
            <img src={EsportsHubLogo} alt="website logo"></img>
            <div className="Header__nav">
                <Link className="Header__links" to="/">
                    Home
                </Link>
                <Link to="/">About</Link>
                <Link
                    className={
                        userData ? "Header__signup --hidden" : "Header__signup"
                    }
                    to="/users/signup"
                >
                    Sign Up
                </Link>
                <Link
                    className={
                        userData ? "Header__login --hidden" : "Header__login"
                    }
                    to="/users/login"
                >
                    Log In
                </Link>
                <Link
                    className={
                        userData
                            ? "Header__profile"
                            : "Header__profile --hidden"
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
