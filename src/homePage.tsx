import React from "react";
import { makeStyles } from "../shared/styles/makeStyles";

const useStyles = makeStyles()((theme) => ({
    homePage: {
        padding: theme.spacing(2),
    },
}));

export const HomePage: React.FC = () => {
    const { classes } = useStyles();

    return <div className={classes.homePage}>Hello, world</div>;
};
