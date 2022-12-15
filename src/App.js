import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoL from "./pages/LoL/LoL";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoLTeams from "./pages/LoLTeams/LoLTeams";
import LoLPlayers from "./pages/LoLPlayers/LoLPlayers";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import SpecificArticle from "./pages/SpecificArticle/SpecificArticle";
import About from "./pages/About/About";
function App() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);
    const [login, setLogin] = useState(false);

    const updateLogin = (loginInfo) => {
        if (loginInfo) {
            return setLogin(true);
        }
    };
    const logout = (logout) => {
        setUser(null);
        setLogin(false);
        return;
    };

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            return setFailedAuth(true);
        }

        // Get the data from the API
        axios
            .get(`${API_URL}/users/current`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                setFailedAuth(true);
            });
    }, [login]);

    return (
        <BrowserRouter>
            <Header userData={user} />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/LoL" element={<LoL />}></Route>
                <Route
                    path="/LoL/:articleId"
                    element={<SpecificArticle />}
                ></Route>
                <Route path="/LoL/teams" element={<LoLTeams />}></Route>
                <Route
                    path="/LoL/teams/:teamId"
                    element={<LoLPlayers />}
                ></Route>
                <Route
                    path="/LoL/create-article"
                    element={<CreateArticle userData={user} />}
                ></Route>
                <Route path="/users/signup" element={<Signup />}></Route>
                <Route
                    path="/users/login"
                    element={<Login updateLogin={updateLogin} />}
                ></Route>
                <Route
                    path="/profile"
                    element={<Profile userData={user} logout={logout} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
