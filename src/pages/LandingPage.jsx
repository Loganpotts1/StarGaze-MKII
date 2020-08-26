import React from "react";
import Navbar from "../components/Navbar";
import Rocketship from "../components/Rocketship";
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

                    <h1 className="heading-1">
                        Explore with NASA
                    </h1>


                    
                    <p className="header__text">
                        Discover pictures and podcasts <br/>
                        from behind the scenes <br/>
                        at the international space station
                    </p>

                </div>

                <div className="cta">

                    <h2 className="heading-2">
                        What will be your destination?
                    </h2>

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