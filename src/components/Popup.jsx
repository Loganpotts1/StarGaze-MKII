import React from "react";

export default function Popup(props) {
    const { close } = props;

    function setTheme(theme) {
        window.sessionStorage.setItem("theme", `${theme}`);
    }

    function hoverTheme(theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }
    

    return (
        <div className="popup">


            <div className="popup__content">

                <div className="popup__close">
                    <span onClick={close}>
                        X
                    </span>
                </div>

                <h2 className="heading-2 popup__heading">
                    What theme would you like?
                </h2>

                <ul className="popup__list">

                    <li
                    className="popup__list-item"
                    onMouseEnter={() => hoverTheme("default")}
                    onClick={() => {setTheme("default");close()}}
                    >
                        Default
                    </li>

                    <li 
                    className="popup__list-item" 
                    onMouseEnter={() => hoverTheme("martian")} 
                    onClick={() => {setTheme("martian");close()}}
                    >
                        Martian
                    </li>

                    <li
                    className="popup__list-item"
                    onMouseEnter={() => hoverTheme("1969")}
                    onClick={() => {setTheme("1969");close()}}
                    >
                        1969
                    </li>
                    
                </ul>

            </div>


        </div>
    );
}