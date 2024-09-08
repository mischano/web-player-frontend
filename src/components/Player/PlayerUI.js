import React from 'react';
import { PlayCircle, PauseCircle } from '@mui/icons-material';
import { Box, IconButton, AppBar, Toolbar } from '@mui/material';
import { appBarStyles, toolBarStyles, boxStyles, iconButtonStyles } from './PlayerStyles';
// Icons below must be imported individually 
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// End. 

const PlayerUI = ({
    isPlaying,
    isShuffle,
    isRepeatOn,
    handlePlayPause,
    handlePrevious,
    handleNext,
    handleShuffle,
    handleRepeat,
    handleMute,
    handleVolumeChange, // Unimplemented
    volume,
}) => {
        
    const renderShuffleIcon = () => isShuffle ? <ShuffleOnIcon sx={iconButtonStyles}/> : <ShuffleIcon sx={iconButtonStyles}/>;
    const renderPlayPauseIcon = () => isPlaying ? <PauseCircle sx={iconButtonStyles}/> : <PlayCircle sx={iconButtonStyles}/>;
    const renderRepeatOnOff = () => isRepeatOn ? <RepeatOnIcon sx={iconButtonStyles}/> : <RepeatIcon sx={iconButtonStyles}/>;
    const renderVolumeIcon = (volume) => {
        if (volume == 0) { 
            return <VolumeOffIcon fontSize='inherit' />;
        } else if (volume > 0 && volume < 50) {
            return <VolumeDown fontSize='inherit' />;
        } else {
            return <VolumeUp fontSize='inherit' />;
        }
    }

    return (
        <AppBar  {... appBarStyles}>
            <Toolbar {... toolBarStyles}>
                <Box {... boxStyles}>
                    <IconButton onClick={handleShuffle} color='inherit' aria-label={isShuffle ? 'shuffleOn' : 'shuffleOff'} sx={iconButtonStyles}>
                        {renderShuffleIcon()}
                    </IconButton>
                    <IconButton onClick={handlePrevious} color='inherit' aria-label='Previous' sx={iconButtonStyles}>
                        <SkipPreviousIcon sx={iconButtonStyles}/>
                    </IconButton>
                    <IconButton  onClick={handlePlayPause} color='inherit' aria-label={isPlaying ? 'Pause' : 'Play'} sx={iconButtonStyles}>
                        {renderPlayPauseIcon()}
                    </IconButton>
                    <IconButton onClick={handleNext} color='inherit' aria-label='Next' sx={iconButtonStyles}>
                        <SkipNextIcon sx={{ fontSize: 'inherit' }} />
                    </IconButton>
                    <IconButton onClick={handleRepeat} color='inherit' aria-label='Repeat' sx={iconButtonStyles}>
                        {renderRepeatOnOff()}
                    </IconButton>
                    <IconButton onClick={handleMute} color='inherit' aria-label='Mute-Unmute' sx={iconButtonStyles}>
                        {renderVolumeIcon(volume)}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default PlayerUI;
