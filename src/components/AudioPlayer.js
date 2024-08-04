import React, { useEffect, useState } from "react";
import { useGlobal } from "../GlobalContext";
import ReactPlayer from "react-player"


const AudioPlayer = () => {
    const { globalFetchResult, setGlobalFetchResult } = useGlobal();
    const [ playlist, setPlaylist ] = useState([]);
    const [ currentAudio, setCurrentAudio ] = useState(null);
    const [ isAudioPlaying, setIsAudioPlaying ] = useState(false);

    const isPlaylistEmpty = playlist.length == 0;
    
    const formattedPlaylist = playlist
        .map(({ title }, idx) => `${idx + 1}. ${title ?? 'Untitled'}`)
        .join('\n');

    useEffect (() => {
        if (globalFetchResult && !globalFetchResult.error) {
            setPlaylist([...playlist, globalFetchResult]);
            setGlobalFetchResult('');
        }
    }, [globalFetchResult]);

    useEffect(() => {
        if (isPlaylistEmpty || isAudioPlaying) {
            return;
        }
        const playNow = playlist[0];
        
        setCurrentAudio(playNow);
        setIsAudioPlaying(true);
        setPlaylist(playlist => playlist.slice(1)); 

    }, [playlist, isAudioPlaying]);

    
    const playNextAudio = () => {
        setCurrentAudio(null);
        setIsAudioPlaying(false);
    };
    
    return (
        <div>
            <ReactPlayer
                url={currentAudio ? currentAudio.url : null}
                playing={isAudioPlaying}
                onEnded={playNextAudio}
            />
            <textarea
                value={formattedPlaylist}
                rows="20"
                cols="40"
                readOnly
            />
            <textarea
                value={currentAudio ? currentAudio.title : ''}
                rows="10"
                cols="20"
                readOnly
            />
        </div>
    )
};

export default AudioPlayer;
