import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Player from './Player';
import { useGlobal } from '../GlobalContext';


const PlayerLogic = () => {
    const { globalFetchResult, setGlobalFetchResult } = useGlobal();
    const [current, setCurrent] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeatOn, setIsRepeatOn] = useState(false);
    const [volume, setVolume] = useState(50);
   
    useEffect(() => {
        if (globalFetchResult && !globalFetchResult.error) {
            setPlaylist([... playlist, globalFetchResult]);
            setGlobalFetchResult('');
        }
    }, [globalFetchResult, setGlobalFetchResult]);

    useEffect(() => {
        if (isPlaying || playlist.length == 0) {
            return;
        }
        let newCurrent = playlist[0];
        setCurrent(newCurrent);
        setIsPlaying(true);
        setPlaylist(playlist => playlist.slice(1));

    }, [isPlaying, playlist]);

    const playNextAudio = () => {
        setCurrent(null);
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        if (!current) {
            return;
        }
        let remount = current;

        setCurrent(null);
        setIsPlaying(false);
        
        setTimeout(() => {
            setCurrent(remount);
            setIsPlaying(isPlaying);
        }, 0);
    };

    const handleNext = () => {
        playNextAudio();
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
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handleShuffle={handleShuffle}
                handleRepeat={handleRepeat}
                handleMute={handleMute}
                handleVolumeChange={handleVolumeChange}
                volume={volume}
            />
            <ReactPlayer
                url={current ? current.url : null} 
                playing={isPlaying}
                onEnded={playNextAudio}
                controls={false}
            />

        </div>
    );
};

export default PlayerLogic;
