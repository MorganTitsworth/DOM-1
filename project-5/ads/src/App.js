import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, useTheme } from "./themeContext";
import ThemeSwitcher from "./themeContext";
import ThemeSwitcherUseEffect from "./components/themeSwitcherUseEffect";

const Main = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h1>This is a {theme} theme</h1>
            <ThemeSwitcher />
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
}

export default App;
