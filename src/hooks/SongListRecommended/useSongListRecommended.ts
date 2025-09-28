import {useCallback, useState} from "react";

export const useSongListRecommended = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlayingSong, setIsPlayingSong] = useState(false);
    const [songPlayTime, setSongPlayTime] = useState(0);
    const [isMusiTitleVisible, setIsMusicTitleVisible] = useState(false);

    {/* Timeout to make the title visible after 400ms of hovering and starting the song */}
    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        setIsPlayingSong(true);
        setSongPlayTime(0);
        const makeTitleVisibleTimeout = setTimeout(() => {
            setIsMusicTitleVisible(true);
        }, 400);
        return () => clearTimeout(makeTitleVisibleTimeout);
    }, [setIsPlayingSong, setIsHovered]);

    {/* Handle mouse leave so that is all gone */}
    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setIsPlayingSong(false);
        setSongPlayTime(0);
        setIsMusicTitleVisible(false);
    }, []);

    return {
        isMusiTitleVisible,
        songPlayTime,
        isPlayingSong,
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    };
}
