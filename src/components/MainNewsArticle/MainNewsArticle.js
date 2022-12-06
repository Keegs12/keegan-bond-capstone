import "./MainNewsArticle.scss";
function MainNewsArticle({ article }) {
    if (!article) {
        return;
    }
    console.log(article);
    return (
        <div className="Main-Article">
            <h2>{article.article_title}</h2>
            <div className="Main-Article__user-info-container">
                <p>{article.description}</p>
                <div className="Main-Article__profile-pic">ProfilePic</div>
                <h3 className="Main-Article__author">{article.author}</h3>
                <p className="Main-Article__date">{article.created_at}</p>
                {/* Images of Social Links */}
            </div>
        </div>
    );
}

export default MainNewsArticle;
