import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import AudioController from './Bottom Bar/AudioController';
import Playlist from './Playlist';
import { useGlobal } from '../GlobalContext';


const PlayerManager = () => {
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
        if (isPlaying || current || playlist.length === 0) {
            return;
        }

        let newAudioToPlay = playlist[0];
        
        setCurrent(newAudioToPlay);
        setIsPlaying(true);
        setPlaylist(playlist => playlist.slice(1));
    }, [playlist]);

    const playNextAudio = () => {
        if (playlist.length === 0) {
            setCurrent(null);
            setIsPlaying(false);
            return;
        }
        
        let newCurrent = playlist[0];
        setPlaylist(playlist => playlist.slice(1));
        
        setTimeout(() => {
            setCurrent(newCurrent);
            setIsPlaying(true);
        }, 0);
    };

    const handlePlayPause = () => {
        if (!current) {
            return;
        }
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
            setIsPlaying(true);
        }, 0);
    };

    const handleNext = () => {
        setIsRepeatOn(false);
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
            <AudioController
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
            {/* <Playlist
                current={current}
                playlist={playlist} 
            /> */}
            {/* <ReactPlayer
                url={current ? current.url : null} 
                playing={isPlaying}
                onEnded={playNextAudio}
                loop={isRepeatOn}
                controls={false}
            /> */}

        </div>
    );
};

export default PlayerManager;
