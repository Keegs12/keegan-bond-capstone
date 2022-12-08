import "./Player.scss";

function Player({ player, role }) {
    if (!player) {
        return;
    }
    console.log(player[0].image_url);

    return (
        <div>
            <img src={role}></img>
            <img src={player[0].image_url}></img>
        </div>
    );
}

export default Player;
