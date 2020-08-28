import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(prevTheme => {
        return (
            prevTheme ? ([...prevTheme]) : "1969"
        );
       
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}