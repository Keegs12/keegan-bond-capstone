import "./NewsArticles.scss";
import twitter from "../../assets/icons/twitter-svgrepo-com.svg";
import facebook from "../../assets/icons/facebook-svgrepo-com.svg";
import email from "../../assets/icons/mail-svgrepo-com.svg";
import reddit from "../../assets/icons/reddit-svgrepo-com.svg";

function NewsArticles({ articles }) {
    console.log(articles);

    return articles.map((article) => {
        return (
            <div className="Articles">
                <h2 className="Articles__title">{article.article_title}</h2>

                <div className="Articles__user-info-container">
                    <div className="Articles__description-container">
                        <p className="Articles__description">
                            {article.description}
                        </p>
                        <p className="Articles__tag">#NEWS</p>
                    </div>
                    <div className="Articles__user-info-container--flex">
                        <div className="Articles__user-info-subcontainer">
                            <div className="Articles__profile-pic"></div>
                            <h3 className="Articles__author">
                                {article.author}
                            </h3>
                            <p className="Articles__date">
                                {new Date(article.created_at).toDateString()}
                            </p>
                        </div>
                        <div className="Articles__media-container">
                            <div className="Articles__media-icon-background">
                                <img
                                    className="Articles__media-icon"
                                    src={twitter}
                                    alt="media icon"
                                ></img>
                            </div>
                            <div className="Articles__media-icon-background">
                                <img
                                    className="Articles__media-icon"
                                    src={facebook}
                                    alt="media icon"
                                ></img>
                            </div>
                            <div className="Articles__media-icon-background">
                                <img
                                    className="Articles__media-icon"
                                    src={reddit}
                                    alt="media icon"
                                ></img>
                            </div>
                            <div className="Articles__media-icon-background">
                                <img
                                    className="Articles__media-icon"
                                    src={email}
                                    alt="media icon"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Articles__image-container">
                    <img
                        className="Articles__thumbnail"
                        alt="article thumbnail"
                        src={article.image}
                    ></img>
                </div>
            </div>
        );
    });
}

export default NewsArticles;
