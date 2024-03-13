import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_LIGHT":
            return state === "light";
        case "TOGGLE_DARK":
            return state === "dark";
        case "TOGGLE_RED":
            return state === "red";
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, "light");
    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
