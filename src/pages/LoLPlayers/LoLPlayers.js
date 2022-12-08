import "./LoLPlayers.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "../../components/Player/Player";
import TOP from "../../assets/roles/TOP.png";
import JNG from "../../assets/roles/JUNGLE.png";
import MID from "../../assets/roles/MIDDLE.png";
import ADC from "../../assets/roles/ADC.png";
import SUPP from "../../assets/roles/SUPPORT.png";
function LoLPlayers(props) {
    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    const selectedTeamId = teamId || null;

    const anonymousPlayer = {
        age: 0,
        birthday: "0",
        first_name: "Unknown",
        id: Math.random() * 1000,
        image_url:
            "https://cdn.pandascore.co/images/player/image/329/100_ssumday_2021_split_2.png",
        last_name: "Unknown",
        modified_at: "2022-11-24T13:06:51Z",
        name: "Unknown",
        nationality: "Unknown",
        role: "Unknown",
        slug: "Unknown",
    };
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
    const { players } = team;

    if (!players) {
        return;
    }
    let topLane = players.filter((player) => {
        return player.role === "top";
    });
    let jungle = players.filter((player) => {
        return player.role === "jun";
    });
    let midLane = players.filter((player) => {
        return player.role === "mid";
    });
    let adc = players.filter((player) => {
        return player.role === "adc";
    });
    let support = players.filter((player) => {
        return player.role === "sup";
    });
    if (topLane === []) {
        return (topLane = false);
    }
    if (jungle === []) {
        return (jungle = false);
    }
    if (midLane === []) {
        return (midLane = false);
    }
    if (adc === []) {
        return (adc = false);
    }
    if (support === []) {
        return (support = false);
    }
    console.log(topLane);
    console.log(jungle);
    console.log(midLane);
    console.log(adc);
    console.log(support);
    return (
        <>
            <Player player={topLane ? topLane : anonymousPlayer} role={TOP} />
            <Player player={jungle ? jungle : anonymousPlayer} role={JNG} />
            <Player player={midLane ? midLane : anonymousPlayer} role={MID} />
            <Player player={adc ? adc : anonymousPlayer} role={ADC} />
            <Player player={support ? support : anonymousPlayer} role={SUPP} />
        </>
    );
}

export default LoLPlayers;
