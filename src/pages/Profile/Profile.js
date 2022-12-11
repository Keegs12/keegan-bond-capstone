import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile({ userData, logout }) {
    const [failedAuth, setFailedAuth] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        // setUser(null);
        setFailedAuth(true);
        logout(failedAuth);
    };

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
        <div>
            <h1>Profile</h1>
            <p> Email: {userData.email}</p>
            <p> Phone: {userData.phone}</p>
            <p> Address: {userData.address}</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Profile;
