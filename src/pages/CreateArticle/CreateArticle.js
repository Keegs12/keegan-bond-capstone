import "./CreateArticle.scss";
import axios from "axios";
import Input from "../../components/Input/Input";

function CreateArticle({ userData }) {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData.first_name);
        const newArticle = {
            article_title: e.target.articleTitle.value,
            description: e.target.description.value,
            author: e.target.author.value || userData.first_name,
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
                <Input
                    type="text"
                    name="articleTitle"
                    placeholder="Enter Article Title"
                    label="Article Headline/Title"
                />
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter description article"
                ></textarea>

                {userData ? (
                    ""
                ) : (
                    <Input
                        type="text"
                        name="author"
                        placeholder="Please Enter your Name"
                        label="Author"
                    />
                )}

                <Input type="file" name="image" label="Image" />
                <button type="submit">Create Article</button>
            </form>
        </div>
    );
}

export default CreateArticle;
