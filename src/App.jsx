import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ProfessorPage from "./pages/ProfessorPage";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Customize your primary color here
        },
        secondary: {
            main: "#757575", // Customize your secondary color here
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif", // Ensure typography consistency
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProfessorPage />
        </ThemeProvider>
    );
};

export default App;
