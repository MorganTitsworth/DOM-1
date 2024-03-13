import React from "react";
import { useTheme } from "./themeContext";

export default function ThemeSwitcher() {
    const { dispatch } = useTheme();

    return (
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
            Toggle Theme
        </button>
    );
}
