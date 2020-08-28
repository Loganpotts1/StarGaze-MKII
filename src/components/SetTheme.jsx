import React from "react";

export default function SetTheme(props) {
    const css = document.documentElement.style;

    

    switch (props.theme) {
        case "martian":
            css.setProperty("--font-color", "244, 140, 6");
            css.setProperty("--font-color-alt", "55, 6, 23");

            css.setProperty("--color-primary", "244, 140, 6");

            css.setProperty("--bg-gradient-inner", "55, 6, 23");
            css.setProperty("--bg-gradient-outer", "3, 7, 30");

            css.setProperty("--rocket-color-main", "244, 140, 6");
            css.setProperty("--rocket-color-secondary", "3, 7, 30");
            css.setProperty("--rocket-color-planets", "3, 7, 30");
            css.setProperty("--rocket-color-moons", "244, 140, 6");
            css.setProperty("--rocket-color-stars", "255, 255, 255");
            css.setProperty("--rocket-color-flame-top", "255, 255, 255");
            css.setProperty("--rocket-color-flame-middle", "90, 139, 183");
            css.setProperty("--rocket-color-flame-bottom", "80, 57, 116");

            css.setProperty("--btn-font-color", "55, 6, 23");
            css.setProperty("--btn-font-color-alt", "255, 255, 255");
            css.setProperty("--btn-color", "244, 140, 6");
            css.setProperty("--btn-color-hover-top", "90, 139, 183");
            css.setProperty("--btn-color-hover-bottom", "80, 57, 116");
            css.setProperty("--btn-color-shadow", "0, 0, 0");
            break;

        case "1969":
            // make code
            break;
    
        default:
            //make code
            break;
    }

    
}