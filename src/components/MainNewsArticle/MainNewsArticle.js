import "./MainNewsArticle.scss";
import twitter from "../../assets/icons/twitter-svgrepo-com.svg";
import facebook from "../../assets/icons/facebook-svgrepo-com.svg";
import email from "../../assets/icons/mail-svgrepo-com.svg";
import reddit from "../../assets/icons/reddit-svgrepo-com.svg";
import { useState } from "react";
function MainNewsArticle({ article }) {
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };

    if (!article) {
        return;
    }

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={hover ? "Main-Article--active" : "Main-Article"}
        >
            <img className="Main-Article__image" src={article.image}></img>
            <p className="Main-Article__tag">#NEWS</p>
            <h2
                className={
                    hover ? "Main-Article__title--hover" : "Main-Article__title"
                }
            >
                {article.article_title}
            </h2>
            <div className="Main-Article__user-info-container">
                <div className="Articles__description-container">
                    <p className="Main-Article__description ">
                        {article.description}
                    </p>
                </div>
                <div className="Articles__user-info-container--flex">
                    <div className="Articles__user-info-subcontainer">
                        <div className="Articles__profile-pic"></div>
                        <h3 className="Articles__author">{article.author}</h3>
                        <p className="Articles__date">
                            {new Date(article.created_at).toDateString()}
                        </p>
                    </div>
                    <div className="Articles__media-container">
                        <div
                            className={
                                hover
                                    ? "Articles__media-icon-background --img-hover"
                                    : "Articles__media-icon-background"
                            }
                        >
                            <img
                                className="Articles__media-icon"
                                src={twitter}
                                alt="media icon"
                            ></img>
                        </div>
                        <div
                            className={
                                hover
                                    ? "Articles__media-icon-background --img-hover"
                                    : "Articles__media-icon-background"
                            }
                        >
                            <img
                                className="Articles__media-icon"
                                src={facebook}
                                alt="media icon"
                            ></img>
                        </div>
                        <div
                            className={
                                hover
                                    ? "Articles__media-icon-background --img-hover"
                                    : "Articles__media-icon-background"
                            }
                        >
                            <img
                                className="Articles__media-icon"
                                src={reddit}
                                alt="media icon"
                            ></img>
                        </div>
                        <div
                            className={
                                hover
                                    ? "Articles__media-icon-background --img-hover"
                                    : "Articles__media-icon-background"
                            }
                        >
                            <img
                                className="Articles__media-icon"
                                src={email}
                                alt="media icon"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNewsArticle;
