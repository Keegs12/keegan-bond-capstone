import "./Player.scss";
import ADC from "../../assets/roles/ADC.png";

function Player({ info }) {
    const players = info.players;
    console.log(players);
    if (!players) {
        return;
    }
    return players.map((player) => {
        return (
            <div>
                <img src={ADC}></img>
                <img src={player.image_url}></img>
            </div>
        );
    });
}

export default Player;
