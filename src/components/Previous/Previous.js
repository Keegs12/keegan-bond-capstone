import React from "react";
import backArrow from "../../assets/icons/arrow-left-svgrepo-com.svg";
import { Link } from "react-router-dom";
import "./Previous.scss";
function Previous({ previous }) {
    return (
        <div className="Previous">
            <div className="Previous__container">
                <Link to={`${previous}`}>
                    <img
                        className="Previous__image"
                        src={backArrow}
                        alt="backarrow"
                    ></img>
                </Link>
                <h2 className="Previous__title">Previous</h2>
            </div>
        </div>
    );
}

export default Previous;
