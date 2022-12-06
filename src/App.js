import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoL from "./pages/LoL/LoL";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoLTeams from "./pages/LoLTeams/LoLTeams";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/LoL" element={<LoL />}></Route>
                <Route path="/LoL/teams" element={<LoLTeams />}></Route>
                <Route path="/LoL/teams/:teamId"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
