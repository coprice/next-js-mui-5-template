import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/cache";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { theme } from "../shared/styles/theme";
import "../styles/globals.css";

let muiCache: EmotionCache | undefined = undefined;

export const createMuiCache = () => (muiCache = createCache({ key: "mui", prepend: true }));

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={muiCache ?? createMuiCache()}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
