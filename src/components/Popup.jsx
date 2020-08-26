import React from "react";
import HeadingOne from "./HeadingOne";

export default function Popup(props) {

    return (
        <div className="popup">
            <span className="popup__close" onClick={props.close}>
                X
            </span>
            <HeadingOne
            text="What theme will you choose today?"
            />
            <ul className="popup__list">
                <li className="popup__list-item theme-default">
                    Default
                </li>
                <li className="popup__list-item theme-martian">
                    Martian
                </li>
                <li className="popup__list-item theme-1969">
                    1969
                </li>
            </ul>
        </div>
    );
}