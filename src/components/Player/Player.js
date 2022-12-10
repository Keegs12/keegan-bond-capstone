import "./Player.scss";
import arrowRight from "../../assets/icons/arrow-right-svgrepo-com.svg";
import arrowLeft from "../../assets/icons/arrow-left-svgrepo-com.svg";
import { useState } from "react";
import LoL from "../../assets/logo/LoL.png";
function Player({ player, role }) {
    console.log(player);
    let [slideIndex, setSlideIndex] = useState(0);

    const next = () => {
        if (slideIndex === player.length - 1) {
            return setSlideIndex(0);
        }
        setSlideIndex((prevSlideIndex) => (prevSlideIndex += 1));
    };
    const previous = () => {
        if (slideIndex === 0) {
            return setSlideIndex(player.length - 1);
        }
        setSlideIndex((prevSlideIndex) => (prevSlideIndex -= 1));
    };
    if (!player) {
        return;
    }

    return (
        <div className="Players-container">
            <div className="Players__logo-role-container">
                <img
                    className="Players__league-logo"
                    src="https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png"
                    alt="LoL logo"
                ></img>
                <img
                    className="Players__role"
                    src={role}
                    alt="LoL role icon"
                ></img>
            </div>
            <img
                className="Players__image"
                src={player[slideIndex].image_url}
                alt="player"
            ></img>
            <div className="Players__info-container">
                <div className="Players__name-container">
                    <img
                        className={
                            player.length === 1
                                ? "Players__previous-image --hidden"
                                : "Players__previous-image"
                        }
                        onClick={previous}
                        src={arrowLeft}
                        alt="left arrow"
                    ></img>
                    <h2 className="Players__ign">
                        {player[slideIndex].name} :{" "}
                    </h2>
                    <div className="Players__name">
                        <h2 className="Players__first-name">
                            {player[slideIndex].first_name}
                        </h2>
                        <h2 className="Players__last-name">
                            {player[slideIndex].last_name}
                        </h2>
                    </div>
                    <img
                        className={
                            player.length === 1
                                ? "Players__next-image --hidden"
                                : "Players__next-image"
                        }
                        onClick={next}
                        src={arrowRight}
                        alt="right arrow"
                    ></img>
                </div>
                <div className="Players__card-info-container">
                    <div className="Players__card-info">
                        <h3 className="Players__label">Team :</h3>
                        <h3 className="Players__info">
                            {player[slideIndex].nationality}
                        </h3>
                    </div>
                    <div className="Players__card-info">
                        <h3 className="Players__label">Nationality :</h3>
                        <h3 className="Players__info">
                            {player[slideIndex].nationality}
                        </h3>{" "}
                    </div>
                    <div className="Players__card-info">
                        <h3 className="Players__label">Role :</h3>
                        <h3 className="Players__info">
                            {player[slideIndex].role}
                        </h3>
                    </div>
                    <div className="Players__card-info">
                        <h3 className="Players__label">Birthday :</h3>
                        <h3 className="Players__info">
                            {player[slideIndex].birthday}
                        </h3>
                    </div>
                    <div className="Players__card-info">
                        <h3 className="Players__label">Age :</h3>
                        <h3 className="Players__info">
                            {player[slideIndex].age}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
