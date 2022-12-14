import Navbar from "../../components/Navbar/Navbar";
import MainNewsArticle from "../../components/MainNewsArticle/MainNewsArticle";
import NewsArticles from "../../components/NewsArticles/NewsArticles";
import axios from "axios";
import { useEffect, useState } from "react";
import PostAdd from "../../components/PostAdd/PostAdd";
import "./LoL.scss";

function LoL() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [articles, setArticles] = useState([]);

    const mainArticle = articles[0];
    useEffect(() => {
        axios
            .get(`${API_URL}/lol/articles`)
            .then((response) => {
                setArticles(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);
    if (!articles) {
        return;
    }

    const filteredArticles = articles.filter((article) => {
        return article.id !== mainArticle.id;
    });
    if (!mainArticle) {
        return;
    }

    return (
        <>
            <Navbar />
            <h1 className="LoL__title">Latest News</h1>
            <section className="LoL-Page">
                <div className="Main-Article__container">
                    <MainNewsArticle article={mainArticle} />

                    <PostAdd />
                </div>
                {filteredArticles.map((article) => (
                    <NewsArticles articles={article} key={article.id} />
                ))}
            </section>
        </>
    );
}

export default LoL;
