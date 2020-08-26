import React from "react";
import Navbar from "../components/Navbar";
import Rocketship from "../components/Rocketship";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import {
    ButtonDuoFirst,
    ButtonDuoLast
} from "../components/ButtonDuo";
import Popup from "../components/Popup";

export default function LandingPage() {

    const [popupToggled, setPopupToggled] = React.useState(true);

    function togglePopup() {
        setPopupToggled(!popupToggled);
    }

    return (
        <div className="container container--landing-page">


            <Navbar />


            <main className="content">

                <Rocketship />

                <div className="header">

                    <HeadingOne 
                    text="Explore with NASA" 
                    />

                    <p className="header__text">
                        Discover pictures and podcasts <br/>
                        from behind the scenes <br/>
                        at the international space station
                    </p>

                </div>

                <div className="cta">

                    <HeadingTwo 
                    text="What will be your destination?" 
                    />

                    <div className="cta__buttons">
                        <ButtonDuoFirst 
                        text="Earth" 
                        />
                        <ButtonDuoLast 
                        text="Mars" 
                        />
                    </div>

                </div>

            </main>

            {
                popupToggled && <Popup close={() => togglePopup()}/>
            }

        </div>
    );
}