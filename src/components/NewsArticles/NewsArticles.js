import "./NewsArticles.scss";
import twitter from "../../assets/icons/twitter-svgrepo-com.svg";
import facebook from "../../assets/icons/facebook-svgrepo-com.svg";
import email from "../../assets/icons/mail-svgrepo-com.svg";
import reddit from "../../assets/icons/reddit-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function NewsArticles({ articles }) {
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => {
        setHover(true);
    };
    const handleMouseOut = () => {
        setHover(false);
    };

    return (
        <Link to={`${articles.id}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={hover ? "Articles --active" : "Articles"}
            >
                <div className="Articles__user-info-container">
                    <h2
                        className={
                            hover
                                ? "Articles__title --hover"
                                : "Articles__title"
                        }
                    >
                        {articles.article_title}
                    </h2>
                    <div className="Articles__subcontainer">
                        <div className="Articles__description-container">
                            <p className="Articles__description">
                                {articles.description}
                            </p>
                            <p className="Articles__tag">#NEWS</p>
                        </div>
                        <div className="Articles__user-info-container--flex">
                            <div className="Articles__user-info-subcontainer">
                                <div className="Articles__profile-pic"></div>
                                <h3 className="Articles__author">
                                    {articles.author}
                                </h3>
                                <p className="Articles__date">
                                    {new Date(
                                        articles.created_at
                                    ).toDateString()}
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
                <div className="Articles__image-container">
                    <img
                        className="Articles__thumbnail"
                        alt="article thumbnail"
                        src={articles.image}
                    ></img>
                </div>
            </div>
        </Link>
    );
}

export default NewsArticles;
