// components/Header.tsx
import DarkVeil from '@/components/ui/DarkVeil';
import { FaArrowDown } from "react-icons/fa";
import '@/components/ui/css/DarkVeil.css';

// Il numero di barre che vuoi visualizzare
const NUMBER_OF_BARS = 7;

export const Header = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full h-screen relative">
            <DarkVeil />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
                Welcome To the Music World
            </h1>

            <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                <span className="text-white/80 text-lg md:text-2xl text-center">
                    Expand your Music Horizon and taste new songs!
                </span>

                {/* Equalizzatore a lato */}
                <div className="equalizer-container-inline">
                    {Array.from({ length: NUMBER_OF_BARS }).map((_, index) => (
                        <div key={index} className="equalizer-bar-inline" />
                    ))}
                </div>
            </div>

            {/* Freccia scroll in basso */}
            <button
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
                aria-label="Scroll to content"
            >
                <FaArrowDown className="text-2xl cursor-pointer" />
            </button>
        </div>
    );
};
