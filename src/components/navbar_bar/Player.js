import React, { useState } from 'react';
import { Box, IconButton, Slider, AppBar, Toolbar, Icon } from '@mui/material';
import { PlayCircle, PauseCircle } from '@mui/icons-material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { color, fontSize } from '@mui/system';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeatOn, setIsRepeatOn] = useState(false);
    const [volume, setVolume] = useState(50);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const handleRepeat = () => {
        setIsRepeatOn(!isRepeatOn);
    };

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };
    
    const handleMute = () => {
        if (volume == 0) {
            setVolume(50);
        } else {
            setVolume(0);
        }
    };
        
    const handleVolumeChangeIcon = () => {
        if (volume == 0) { 
            return <VolumeOffIcon fontSize='inherit' />;
        } else if (volume > 0 && volume < 50) {
            return <VolumeDown fontSize='inherit' />;
        } else {
            return <VolumeUp fontSize='inherit' />;
        }
    }

    return (
        <AppBar 
            position='fixed'
            sx={{
                top: 'auto', 
                bottom: 0, 
                backgroundColor: 'transparent', 
                boxShadow: 'none', 
                width: '60%',
                maxWidth: '100%',
                minWidth: '300px',
                height: '10vh',
                maxHeight: '15vh',
                minHeight: '1vh',
                right: '0%',
                padding: 0,
                margin: 0
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%',
                    height: 'auto',
                    padding: 0,
                    flexGrow: 1,
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        gap: { xs: '2px', sm: '4px', md: '6px', lg: '10px'},
                        alignItems: 'top',
                        fontSize: { xs: 15, sm: 20, md: 25, lg: 35 },
                        height: '100%',
                        color: '#d7ccc8',
                    }}
                >
                    <IconButton 
                        onClick={handleShuffle}
                        color='inherit'
                        aria-label={isShuffle ? 'shuffleOn' : 'shuffleOff'}
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        {isShuffle ? (
                            <ShuffleOnIcon sx={{ fontSize: 'inherit' }} />
                        ) : (
                            <ShuffleIcon sx={{ fontSize: 'inherit' }} />
                        )}
                    </IconButton>
                    <IconButton
                        color='inherit'
                        aria-label='Previous'
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        <SkipPreviousIcon sx={{ fontSize: 'inherit' }} />
                    </IconButton>
                    <IconButton 
                        onClick={handlePlayPause} 
                        color='inherit'
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        {isPlaying ? (
                            <PauseCircle sx={{ fontSize: 'inherit' }} />
                        ) : (
                            <PlayCircle sx={{ fontSize: 'inherit' }} />
                        )}
                    </IconButton>
                    <IconButton
                        color='inherit'
                        aria-label='Next'
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        <SkipNextIcon sx={{ fontSize: 'inherit' }} />
                    </IconButton>
                    <IconButton
                        onClick={handleRepeat}
                        color='inherit'
                        aria-label='Repeat'
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        {isRepeatOn ? (
                            <RepeatOnIcon sx={{ fontSize: 'inherit' }} />
                        ) : (
                            <RepeatIcon sx={{ fontSize: 'inherit'}} />
                        )}
                    </IconButton>
                    <IconButton
                        onClick={handleMute}
                        color='inherit'
                        aria-label='Mute-Unmute'
                        sx={{ fontSize: 'inherit', height: 'inherit' }}
                    >
                        {handleVolumeChangeIcon()}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Player;
