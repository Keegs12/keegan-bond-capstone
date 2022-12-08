import "./TeamCard.scss";
function TeamCard({ teams }) {
    return (
        <div>
            <img className="Team-Card__logo" src={teams.image_url}></img>
            <h3 className="Team-Card__acronym">{teams.acronym}</h3>
        </div>
    );
}

export default TeamCard;
