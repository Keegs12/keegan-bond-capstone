import "./CreateArticle.scss";
import axios from "axios";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CreateArticle({ userData }) {
    const API_URL = process.env.REACT_APP_API_URL;
    const [author, setAuthor] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    let navigate = useNavigate();
    const handleInput = (e) => {
        setAuthor(e.target.value);
        setArticleTitle(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const authorValue =
            author || userData.first_name + " " + userData.last_name;
        console.log(e.target.image.files[0]);
        console.log(author);
        const formData = new FormData(e.target);
        // formData.append("article_title", e.target.articleTitle.value);
        // formData.append("description", e.target.description.value);
        formData.set("author", authorValue);
        // article_title: e.target.articleTitle.value,
        // description: e.target.description.value,
        // author: authorValue,
        // formData.append("file", e.target.image.files[0]);

        // console.log(formData.get("file"));

        axios
            .post(`${API_URL}/lol/articles`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                alert("File Upload success");
                navigate("/LoL");
            })
            .catch((err) => alert(err));

        // const newArticle = {
        //     article_title: e.target.articleTitle.value,
        //     description: e.target.description.value,
        //     author: authorValue,
        //     image: e.target.image.files[0],
        // };

        // axios
        //     .post(`http://localhost:8080/lol/articles`, newArticle)
        //     .catch((e) => {
        //         console.log(e);
        //     });
    };
    return (
        <>
            <Navbar />

            <section className="Create-Article">
                <h1 className="Create-Article__title">Create an Article!</h1>
                <div className="Create-Article__container">
                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            name="articleTitle"
                            placeholder="Enter Article Title"
                            label="Article Headline/Title"
                            required={true}
                        />
                        <div className="Create-Article__description-container">
                            <label
                                className="form-input-label"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="Create-Article__description"
                                id="description"
                                name="description"
                                placeholder="Enter description article"
                                required
                            ></textarea>
                        </div>
                        {userData ? (
                            ""
                        ) : (
                            <Input
                                type="text"
                                name="author"
                                placeholder="Please Enter your Name"
                                label="Author"
                                value={author}
                                onChange={handleInput}
                                required={true}
                            />
                        )}

                        <Input
                            type="file"
                            name="image"
                            label="Image"
                            accept="image/png, image/jpeg"
                            required={true}
                        />
                        <button
                            className="Create-Article__submit-button"
                            type="submit"
                        >
                            Create Article
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default CreateArticle;
