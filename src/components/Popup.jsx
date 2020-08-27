import React from "react";

export default function Popup(props) {
    
    
    

    function setTheme(theme) {
        const body = document.querySelector("body");

        body.setAttribute("data-theme", `${theme}`);
    }

    return (
        <div className="popup">


            <div className="popup__content">

                <div className="popup__close">
                    <span onClick={props.close}>
                        X
                    </span>
                </div>

                <h2 className="heading-2 popup__heading">
                    What theme will you choose today?
                </h2>

                <ul className="popup__list">
                    <li className="popup__list-item" onMouseEnter={() => setTheme(0)} onClick={props.close}>
                        Default
                    </li>
                    <li className="popup__list-item" onMouseEnter={() => setTheme("martian")} onClick={props.close}>
                        Martian
                    </li>
                    <li className="popup__list-item" onMouseEnter={() => setTheme(1969)} onClick={props.close}>
                        1969
                    </li>
                </ul>

            </div>


        </div>
    );
}