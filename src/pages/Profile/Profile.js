import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile({ userData, logout }) {
    const [failedAuth, setFailedAuth] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        logout(false);
        // setUser(null);
        setFailedAuth(true);
    };

    // logout(failedAuth);
    // console.log(failedAuth);

    if (failedAuth) {
        return (
            <main className="dashboard">
                <p>You must be logged in to see this page.</p>
                <p>
                    <Link to="/users/login">Log in</Link>
                </p>
            </main>
        );
    }

    if (!userData) {
        return (
            <main className="dashboard">
                <p>Loading...</p>
            </main>
        );
    }

    return (
        <div className="Profile">
            <h1 className="Profile__title">Profile</h1>
            <p className="Profile__email"> Email: {userData.email}</p>
            <p className="Profile__phone"> Phone: {userData.phone}</p>
            <p className="Profile__address"> Address: {userData.address}</p>
            <button className="Profile__button" onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
}

export default Profile;
