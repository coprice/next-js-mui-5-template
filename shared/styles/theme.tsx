import createTheme from "@mui/material/styles/createTheme";

const baseTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const theme = createTheme({
    ...baseTheme,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: baseTheme.palette.background.default,
                    fontSize: "1rem",
                },
                a: {
                    textDecoration: "none",
                },
            },
        },
    },
});
