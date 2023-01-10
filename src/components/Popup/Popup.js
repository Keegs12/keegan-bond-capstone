import React from "react";
import "./Popup.scss";
import ReactDom from "react-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Popup({ open, text, directTo }) {
    const [close, setClose] = useState(open);
    const navigate = useNavigate();
    console.log(open);
    function onClose(input) {
        if (input) {
            setClose(true);
            navigate(directTo);
        }
        setClose(false);
    }
    if (!close) return null;

    return ReactDom.createPortal(
        <>
            <div className="Popup-Overlay">
                <div className="Popup">
                    <h1 className="Popup__message">{text}</h1>
                    <button
                        className="Popup__button"
                        onClick={() => onClose(true)}
                    >
                        Ok!
                    </button>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Popup;
