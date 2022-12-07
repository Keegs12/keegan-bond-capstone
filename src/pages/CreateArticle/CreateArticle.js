import "./CreateArticle.scss";
import axios from "axios";

function CreateArticle(props) {
    const onSubmit = (e) => {
        e.preventDefault();

        const newArticle = {
            article_title: e.target.articleTitle.value,
            description: e.target.description.value,
            author: e.target.author.value,
            image: e.target.image.value,
        };

        console.log(newArticle);
        axios
            .post(`http://localhost:8080/lol/articles`, newArticle)
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="articleTitle">Article Headline/Title</label>
                <input
                    type="text"
                    id="articleTitle"
                    name="articleTitle"
                    placeholder="Enter Article Title"
                ></input>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter description article"
                ></textarea>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Please Enter your Name"
                ></input>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/png, image/jpeg"
                ></input>
                <button type="submit">Create Article</button>
            </form>
        </div>
    );
}

export default CreateArticle;
