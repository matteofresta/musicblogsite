import React from "react";
import { Card } from "@/components/ui/card.tsx";
import { useSongListRecommended } from "@/hooks/SongListRecommended/useSongListRecommended.ts";
import { useVolumeFunctions } from "@/hooks/SongListRecommended/useVolumeFunctions";
import { Link } from "react-router-dom";
import { type cardItem } from "@/data/cardData.ts";
import ReactPlayer from 'react-player';
import { VscUnmute, VscMute } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import '@/index.css'

type SongCardProps = {
    item: cardItem;
};

export const SongCard = ({ item }: SongCardProps) => {

    const {
        isHovered,
        isPlayingSong,
        handleMouseEnter,
        handleMouseLeave,
    } = useSongListRecommended();

    const { volume, handleVolumeToggle } = useVolumeFunctions();

    const handleIconClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleVolumeToggle();
    };


    return (
        <Link to={item.link}>
            <Card
                className="w-80 h-80 relative rounded-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={item.src}
                    alt={item.alt}
                    className={`object-cover absolute top-0 left-0 w-full h-full rounded-xl transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                {isHovered && (
                    <>
                        <ReactPlayer
                            src={item.song}
                            autoPlay={isPlayingSong}
                            playsInline
                            onStart={true}
                            onEnded={false}
                            muted={false}
                            width="100%"
                            height="100%"
                            controls={false}
                            className={`object-cover absolute backdrop-blur-2xl top-0 left-0 w-full h-full rounded-xl`}
                            volume={volume}
                        />
                        {volume > 0 ? (
                            <VscUnmute
                                className="absolute bottom-4 right-4 bg-gray-500/50 rounded-full p-1 text-white text-3xl cursor-pointer z-50"
                                onClick={handleIconClick}
                            />
                        ) : (
                            <VscMute
                                className="absolute bottom-4 right-4 bg-gray-500/50 rounded-full p-1 text-white text-3xl cursor-pointer z-50"
                                onClick={handleIconClick}
                            />
                        )}
                        <img
                            src={item.songImg}
                            alt={item.alt}
                            className={`object-cover absolute top-0 left-0 w-full h-full rounded-xl transition-opacity duration-300 
                            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <span className={`absolute top-2 left-2 text-white loading loading-spinner loading-md
                            ${isPlayingSong ? 0} `}
                            ></span>
                    </>
                )}

                <span className={`absolute z-50 bottom-2 left-2 bg-gray-300/20 backdrop-blur-lg rounded-xl p-4 text-bold text-white text-md ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300}`}>
                    {item.songTitle}
                </span>
                <span
                    className={`pulse absolute flex flex-col bg-gray-300/20 backdrop-blur-lg rounded-xl p-4 justify-center items-center z-50 top-[40%] left-[15%] text-white text-xl 
                    ${isHovered ? "hidden" : "block"}`}>
                    Hover to preview song! <FaPlay className="text-white text-3xl" />
                </span>
            </Card>
        </Link>
    );
};
