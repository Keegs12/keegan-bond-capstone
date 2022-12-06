import "./TeamCard.scss";
function TeamCard({ teams }) {
    return (
        <div className="Team-Card">
            <img className="Team-Card__logo" src={teams.image_url}></img>
            <h3>{teams.acronym}</h3>
        </div>
    );
}

export default TeamCard;
