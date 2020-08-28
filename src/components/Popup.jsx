import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Popup(props) {
    const [theme, setTheme] = useContext(ThemeContext);
    

    return (
        <div className="popup">


            <div className="popup__content">

                <div className="popup__close">
                    <span onMouseEnter={() => setTheme("default")} onClick={props.close}>
                        X
                    </span>
                </div>

                <h2 className="heading-2 popup__heading">
                    What theme would you like?
                </h2>

                <ul className="popup__list">
                    <li className="popup__list-item" onMouseEnter={() => setTheme("default")} onClick={props.close}>
                        Default
                    </li>
                    <li className="popup__list-item" onMouseEnter={() => setTheme("martian")} onClick={props.close}>
                        Martian
                    </li>
                    <li className="popup__list-item" onMouseEnter={() => setTheme("1969")} onClick={props.close}>
                        1969
                    </li>
                </ul>

            </div>


        </div>
    );
}