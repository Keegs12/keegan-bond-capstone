import "./CreateArticle.scss";
import axios from "axios";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
function CreateArticle({ userData }) {
    const [author, setAuthor] = useState("");

    const handleInput = (e) => {
        setAuthor(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const authorValue = author || userData.first_name;

        const newArticle = {
            article_title: e.target.articleTitle.value,
            description: e.target.description.value,
            author: authorValue,
            image: e.target.image.value,
        };

        axios
            .post(`http://localhost:8080/lol/articles`, newArticle)
            .catch((e) => {
                console.log(e);
            });
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
                            />
                        )}

                        <Input
                            type="file"
                            name="image"
                            label="Image"
                            accept="image/png, image/jpeg"
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
