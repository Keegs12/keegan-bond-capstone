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
import Navbar from "../../components/Navbar/Navbar";
import Previous from "../../components/Previous/Previous";
function LoLPlayers(props) {
    const API_URL = process.env.REACT_APP_API_URL;
    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    const selectedTeamId = teamId || null;

    const anonymousPlayer = [
        {
            age: 0,
            birthday: "0",
            first_name: "Unknown",
            id: Math.random() * 1000,
            image_url:
                "https://muhka-ensembles.imgix.net/assets/public/000/033/630/large/people-boy-man-guy-profile-silhouette-head-black.png?w=768&h=768&dpr=2.625&ch=DPR&auto=format%2Ccompress",
            last_name: "Unknown",
            modified_at: "2022-11-24T13:06:51Z",
            name: "Unknown",
            nationality: "Unknown",
            role: "Unknown",
            slug: "Unknown",
        },
    ];
    useEffect(() => {
        if (!selectedTeamId) {
            return;
        }
        axios
            .get(`${API_URL}/lol/teams/${selectedTeamId}`)
            .then((response) => {
                setTeam(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, [selectedTeamId]);

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

    return (
        <>
            <Navbar />
            <Previous previous="/LoL/teams" />
            <section className="Players">
                <Player
                    player={topLane.length === 0 ? anonymousPlayer : topLane}
                    role={TOP}
                    team={team.acronym}
                />
                <Player
                    player={jungle.length === 0 ? anonymousPlayer : jungle}
                    role={JNG}
                    team={team.acronym}
                />
                <Player
                    player={midLane.length === 0 ? anonymousPlayer : midLane}
                    role={MID}
                    team={team.acronym}
                />
                <Player
                    player={adc.length === 0 ? anonymousPlayer : adc}
                    role={ADC}
                    team={team.acronym}
                />
                <Player
                    player={support.length === 0 ? anonymousPlayer : support}
                    role={SUPP}
                    team={team.acronym}
                />
            </section>
        </>
    );
}

export default LoLPlayers;
