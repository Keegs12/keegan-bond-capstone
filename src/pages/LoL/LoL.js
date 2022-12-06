import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MainNewsArticle from "../../components/MainNewsArticle/MainNewsArticle";
import NewsArticles from "../../components/NewsArticles/NewsArticles";
import axios from "axios";
import { useEffect, useState } from "react";
function LoL(props) {
    const [articles, setArticles] = useState([]);

    const mainArticle = articles[0];
    useEffect(() => {
        axios
            .get("http://localhost:8080/lol/articles")
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
    console.log(mainArticle);

    const filteredArticles = articles.filter((article) => {
        return article.id !== mainArticle.id;
    });
    console.log(filteredArticles);
    return (
        <>
            <Navbar />
            <MainNewsArticle article={mainArticle} />
            <NewsArticles articles={filteredArticles} />
        </>
    );
}

export default LoL;
