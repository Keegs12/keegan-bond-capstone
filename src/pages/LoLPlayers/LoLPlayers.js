import "./LoLPlayers.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "../../components/Player/Player";

function LoLPlayers(props) {
    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    const selectedTeamId = teamId || null;

    useEffect(() => {
        if (!selectedTeamId) {
            return;
        }
        axios
            .get(`http://localhost:8080/lol/teams/${selectedTeamId}`)
            .then((response) => {
                setTeam(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, [selectedTeamId]);
    console.log(team);
    return (
        <>
            <Player info={team} />
        </>
    );
}

export default LoLPlayers;
