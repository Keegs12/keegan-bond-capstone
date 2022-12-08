import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoL from "./pages/LoL/LoL";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoLTeams from "./pages/LoLTeams/LoLTeams";
import LoLPlayers from "./pages/LoLPlayers/LoLPlayers";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
function App() {
    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            return setFailedAuth(true);
        }

        // Get the data from the API
        axios
            .get("http://localhost:8080/users/current", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
                setFailedAuth(true);
            });
    }, []);

    console.log(user);

    return (
        <BrowserRouter>
            <Header userData={user} />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/LoL" element={<LoL />}></Route>
                <Route path="/LoL/teams" element={<LoLTeams />}></Route>
                <Route
                    path="/LoL/teams/:teamId"
                    element={<LoLPlayers />}
                ></Route>
                <Route
                    path="/LoL/create-article"
                    element={<CreateArticle />}
                ></Route>
                <Route path="/users/signup" element={<Signup />}></Route>
                <Route path="/users/login" element={<Login />}></Route>
                <Route
                    path="/profile"
                    element={<Profile userData={user} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
