import "./NewsArticles.scss";
function NewsArticles({ articles }) {
    console.log(articles);

    return articles.map((article) => {
        return (
            <div className="Articles">
                <h2 className="Articles__title">{article.article_title}</h2>

                <div className="Articles__user-info-container">
                    <p>{article.description}</p>
                    <div className="Articles__user-info-container--flex">
                        <div>Profile Pic</div>
                        <h3>{article.author}</h3>
                        <p>{article.created_at}</p>
                    </div>
                </div>
                <div></div>
            </div>
        );
    });
}

export default NewsArticles;
