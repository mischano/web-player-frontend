import React from "react";
import { Typography } from "@mui/material";
import { fontSize, margin, maxWidth } from "@mui/system";
import '../../../static/css/middle.css';


const customTypography = {
    variant: 'body1',
    sx: {
        // padding: '10px',
        width: '100%',
        maxWidth: '100%',
        wordBreak: 'break-all',
        fontSize: '18px',
        outline: 'solid 1px #706969',
    },
};

const ChatUI = ({
    chat, 
    oldChatSize,
}) => {
    
    return (
        <div className="custom-paper">
            <Typography
                sx={{
                    ... customTypography.sx,
                }} 
                variant={customTypography.variant}
            >
                Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉  
            </Typography>
            <Typography
                sx={{
                    ... customTypography.sx,
                }} 
                variant={customTypography.variant}
            >
                Nick Cave - Children 
            </Typography>
        </div>
    );
};

export default ChatUI;
