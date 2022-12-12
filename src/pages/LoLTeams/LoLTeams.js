import TeamCard from "../../components/TeamCard/TeamCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./LoLTeams.scss";
function LoLTeams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/lol/teams")
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
            <section className="Teams">
                {teams.map((team) => {
                    return (
                        <Link
                            className="Team-Card"
                            to={`/LoL/teams/${team.id}`}
                        >
                            <TeamCard teams={team} key={team.id} />
                        </Link>
                    );
                })}
                ;
            </section>
        </>
    );
}

export default LoLTeams;
