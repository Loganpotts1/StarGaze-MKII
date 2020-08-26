import React from "react";
import HeadingTwo from "./HeadingTwo";

export default function Popup(props) {

    const body = document.querySelector("body");

    return (
        <div className="popup">


            <div className="popup__content">

                <div className="popup__close">
                    <span>
                        X
                    </span>
                </div>

                <h2 className="heading-2 popup__heading">
                    What theme will you choose today?
                </h2>

                <ul className="popup__list">
                    <li className="popup__list-item" onClick={() => {body.setAttribute("data-theme", "default")}}>
                        Default
                    </li>
                    <li className="popup__list-item" onClick={() => {body.setAttribute("data-theme", "martian")}}>
                        Martian
                    </li>
                    <li className="popup__list-item" onClick={() => {body.setAttribute("data-theme", "1969")}}>
                        1969
                    </li>
                </ul>

            </div>


        </div>
    );
}