import "./SpecificArticle.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
function SpecificArticle(props) {
    const [article, setArticle] = useState([]);
    const { articleId } = useParams();
    const selectedArticleId = articleId || null;
    useEffect(() => {
        if (!selectedArticleId) {
            return;
        }
        axios
            .get(`http://localhost:8080/lol/articles/${selectedArticleId}`)
            .then((response) => {
                setArticle(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, [selectedArticleId]);
    console.log(article);
    return (
        <>
            <Navbar />
            <div className="Specific-Article">
                <h2 className="Specific-Article__title">
                    {article.article_title}
                </h2>
                <div className="Specific-Article__author-container">
                    <h3 className="Specific-Article__author">
                        {article.author}
                    </h3>
                    <h3 className="Specific-Article__date">
                        {new Date(article.created_at).toDateString()}
                    </h3>
                </div>
                <img
                    className="Specific-Article__image"
                    src={article.image}
                    alt="article_image"
                ></img>
                <p className="Specific-Article__description">
                    {article.description}
                </p>
            </div>
        </>
    );
}

export default SpecificArticle;
