import React from "react";
import MoonMenu from "./MoonMenu";

export default function Navbar() {

    function dropDown() {
        const navItems = document.querySelector(".nav__items");
        navItems.classList.toggle("nav__items--active");
    }

    return (
        <nav className="nav">


            <a href="/" className="nav__logo">
                StarGaze
            </a>


            <ul className="nav__items">

                <li className="nav__item">
                    <a href="#0" className="nav__link">
                        Photos
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#0" className="nav__link">
                        Audio
                    </a>
                </li>

                <li className="nav__item">
                    <a href="/mars-rover" className="nav__link">
                        Mars Rover
                    </a>
                </li>

            </ul>


            <MoonMenu dropDown={dropDown}/>
                

        </nav>
    );
}