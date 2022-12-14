import TeamCard from "../../components/TeamCard/TeamCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Previous from "../../components/Previous/Previous";
import "./LoLTeams.scss";
function LoLTeams() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_URL}/lol/teams`)
            .then((response) => {
                setTeams(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);
    if (!teams) {
        return;
    }

    return (
        <>
            <Navbar />
            <Previous previous="/LoL" />
            <section className="Teams">
                {teams.map((team) => {
                    return (
                        <Link
                            className="Team-Card"
                            to={`/LoL/teams/${team.id}`}
                            key={team.id}
                        >
                            <TeamCard teams={team} key={team.id} />
                        </Link>
                    );
                })}
            </section>
        </>
    );
}

export default LoLTeams;
