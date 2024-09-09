import React, { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import { customPaperStyles, customTypographyStyles } from "./MUICustomStyles";
import { white, red, blue, green } from './MUICustomStyles';

const Playlist = ({
        playlist
}) => {
    // For scrolling effect. 
    const paperRef = useRef();
    useEffect(() => {
        paperRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [playlist]);

    return (
        <Paper sx={{
            ...customPaperStyles.sx,
            right: 'calc(1% + 30wv + 10px)',
        }}
            variant={customPaperStyles.variant}
        >
            <Typography
                sx={{
                    ...customTypographyStyles.sx,
                    // color: white,
                    fontSize: '16px',
                    fontWeigth: 'bold',
                    color: blue,
                }}
                variant={customTypographyStyles.variant}
            >{playlist.length <= 0 ? null : 'Playlist'}
            </Typography>
            {playlist.map((item, index) => (
                <Typography
                    key={index} 
                    sx={{
                        ...customTypographyStyles.sx,
                        color: white,
                    }} 
                    variant={customTypographyStyles.variant}
                >
                    {`${index + 1}. ${item.title}`}
                </Typography>
            ))}
        </Paper> 
    );
}

export default Playlist;
