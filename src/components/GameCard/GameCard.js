import "./GameCard.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
function GameCard({ game, wallpaper, title }) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };
    return (
        <>
            <Link
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={`card-${wallpaper}`}
                to={`/${game}`}
            >
                {/* <img className="card__wallpaper" src={wallpaper}></img> */}
                {/* <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={`card-${wallpaper}`}
            > */}
                <div className="card__info-container">
                    <h2 className="card__title">{title}</h2>
                    <p
                        className={
                            hover
                                ? "card__paragraph --visible"
                                : "card__paragraph"
                        }
                    >
                        Checkout the lastest and greatest news for {title}
                    </p>
                </div>
                {/* </div> */}
            </Link>
        </>
    );
}

export default GameCard;
