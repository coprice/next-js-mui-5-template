/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
    "@mui/material",
    "clsx",
    "tss-react",
]);

module.exports = withTM({
    reactStrictMode: true,
    eslint: {
        dirs: ["pages", "shared", "src"],
    },
});
