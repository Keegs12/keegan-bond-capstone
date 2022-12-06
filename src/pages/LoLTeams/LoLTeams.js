import TeamCard from "../../components/TeamCard/TeamCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function LoLTeams(props) {
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
    console.log(teams);
    return teams.map((team) => {
        return (
            <Link to={`/LoL/teams/${team.id}`}>
                <TeamCard teams={team} />
            </Link>
        );
    });
}

export default LoLTeams;
