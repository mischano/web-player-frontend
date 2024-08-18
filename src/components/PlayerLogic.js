import React, { useState } from 'react';
import Player from './Player';

const PlayerLogic = () => {
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
        
    return (
        <div>
            <Player
                isPlaying={isPlaying}
                isShuffle={isShuffle}
                isRepeatOn={isRepeatOn}
                handlePlayPause={handlePlayPause}
                handleShuffle={handleShuffle}
                handleRepeat={handleRepeat}
                handleMute={handleMute}
                handleVolumeChange={handleVolumeChange}
                volume={volume}
            />
        </div>
    );
};

export default PlayerLogic;
