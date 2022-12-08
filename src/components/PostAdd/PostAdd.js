import "./PostAdd.scss";
import { Link } from "react-router-dom";
function PostAdd(props) {
    return (
        <div className="PostAdd">
            <p className="PostAdd__description">
                Share with others the greatest and latest esports news by
                posting an article
            </p>
            <Link to="/LoL/create-article">
                <button>Create Article</button>
            </Link>
        </div>
    );
}

export default PostAdd;
