/*
 * -----------------------------------------------------------------------------
 *  File:         Footer.tsx
 *  Description:  Defines the Song card component for the application.
 *
 *  Author:       Matteo Fresta
 *  Copyright:    Copyright (c) 2025 Matteo Fresta. All rights reserved.
 * -----------------------------------------------------------------------------
 */



import React from "react";
import { Card } from "@/components/ui";
import { useSongListRecommended } from "@/hooks/SongListRecommended/useSongListRecommended.ts";
import { useVolumeFunctions } from "@/hooks/SongListRecommended/useVolumeFunctions";
import {useMenuOpen} from "@/hooks/SongListRecommended/useMenuOpen.ts";
import { Link } from "react-router-dom";
import { type cardItem } from "@/data/cardData.ts";
import ReactPlayer from 'react-player';
import { VscUnmute, VscMute } from "react-icons/vsc";
import { FaSpotify } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { SiYoutubemusic, SiApplemusic } from "react-icons/si";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react"
import '@/index.css'

type SongCardProps = {
    item: cardItem;
};

export const SongCard = ({ item }: SongCardProps) => {

    const {
        isOpen,
        handleCloseMenu,
        handleOpenMenu,
    } = useMenuOpen()

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

    const handleMenuToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isOpen) {
            handleCloseMenu();
        } else {
            handleOpenMenu();
        }
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
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
                            ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                            </span>
                        <motion.div
                            initial={{ filter: "blur(10px)" }}
                            animate={{ filter: "none" }}
                            whileHover={{ scale: 1.1 }}
                            className={`absolute box top-2 right-2 flex z-50  backdrop-blur-lg p-1 rounded-2xl`}>
                            <CiMenuKebab
                                onClick={handleMenuToggle}
                                className={`absolute top-2 right-2 bg-gray-200/50 text-white text-3xl hover:bg-gray-100 hover:text-black duration-300 p-1 m-auto rounded-full z-50 ${isOpen ? 'hidden' : 'block'}`}
                            />
                            <ul>
                                <li className={`absolute top-1 right-2 flex z-99 bg-gray-200/50 backdrop-blur-lg p-1 rounded-2xl ${isOpen ? 'block' : 'hidden'}`}
                                >
                                    <a href={item.spotifyLink} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer"><FaSpotify className="text-white text-3xl mr-1 hover:bg-gray-100 hover:text-black duration-300 p-1 m-auto rounded-full z-50" /></a>
                                    <a href={item.youtubeLink} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer"><SiYoutubemusic className="text-white text-3xl hover:bg-gray-100 hover:text-black duration-300 p-1 m-auto rounded-full z-50" /></a>
                                    <a href={item.appleMusicLink} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer"><SiApplemusic className="text-white text-3xl hover:bg-gray-100 hover:text-black duration-300 p-1 m-auto rounded-full z-50" /></a>
                                    <button>
                                        <IoIosClose
                                        onClick={handleMenuToggle}
                                        className={`text-white text-3xl duration-500 hover:bg-gray-100 hover:text-black p-1 m-auto rounded-full z-50 cursor-pointer`}
                                        /></button>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}

                <span className={`absolute z-50 bottom-2 left-2 bg-gray-300/20 backdrop-blur-lg rounded-xl p-4 text-bold text-white text-md ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
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
