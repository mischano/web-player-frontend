import React from "react";
import SearchBar from "./SearchBar";
import { Box, AppBar, Toolbar } from '@mui/material';
import {
    appBarStyles,
    searchBarContainer,
    buttonsContainer,
} from './TopBarManagerStyles.js';

const TopBarManager = () => {
    return (
        <AppBar {... appBarStyles}>
            <Toolbar {... searchBarContainer}>
                <SearchBar />
            </Toolbar>
            <Toolbar {... buttonsContainer}>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarManager;
