import { Link } from "react-router-dom";
import "./About.scss";

function About(props) {
    return (
        <div className="About">
            <div className="About__info-container">
                <h1 className="About__title">About Us!</h1>
                <p className="About__description">
                    EsportsHub is a news outlet/blog posting application. Our
                    site is focused on creating one universal hub that provides
                    all the latest roster moves, player information, wicked
                    plays, recent events and much more. On top of that we
                    heavily value the interaction of the user allowing all of
                    you to be the source of the information. What are you
                    waiting for, checkout our home page and select your favorite
                    game now!.
                </p>
            </div>
        </div>
    );
}

export default About;
