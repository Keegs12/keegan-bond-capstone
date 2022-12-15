import "./PostAdd.scss";
import { Link } from "react-router-dom";
function PostAdd() {
    return (
        <div className="PostAdd">
            <p className="PostAdd__description">
                Share with others the greatest and latest esports news by
                posting an article
            </p>
            <Link to="/LoL/create-article">
                <button className="PostAdd__button">Create Article</button>
            </Link>
        </div>
    );
}

export default PostAdd;
