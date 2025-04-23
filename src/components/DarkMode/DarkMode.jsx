import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import "./DarkMode.css";
const ThemeToggle = ({iconDarkMode}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
        {
            iconDarkMode && (

                <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")} color="inherit">
                    {theme === "light" ? <BedtimeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
                </IconButton>
            )
        }
        </>
    );
};

export default ThemeToggle;
