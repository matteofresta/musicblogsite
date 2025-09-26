import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import '@/components/ui/css/carouselEffect.css';
import { carouselData } from '@/data/carouselData';
import { useCarousel } from '@/hooks/MainContent/useCarousel';

export const MainContent = () => {
    const {
        currentIndex,
        items,
        transitionEnabled,
        goToPrevious,
        goToNext,
    } = useCarousel(carouselData, 2);

    return (
        <div className="flex flex-col justify-center items-center w-full py-10">
            <h1 className="text-6xl font-bold my-10 text-center">Discover new Music</h1>

            <div className="relative w-full max-w-7xl flex items-center justify-center">
                {/* Pulsante Precedente */}
                <button
                    onClick={goToPrevious}
                    className="z-20 p-2 hover:bg-gray-300 duration-300 rounded-full mx-4 flex-shrink-0"
                    aria-label="Previous Slide"
                >
                    <FaArrowLeft className="text-[2.5rem] cursor-pointer" />
                </button>


                <div className="carousel-container w-full overflow-hidden">
                    <div className="carousel-fog-left"></div>
                    <div className="carousel-fog-right"></div>

                    <div
                        className="flex items-center gap-5 py-5"
                        style={{
                            transform: `translateX(-${currentIndex * 408}px)`,
                            transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
                            width: `${items.length * 408}px`,
                        }}
                    >
                        {items.map((item, index) => (
                            <Link to={item.link} key={`${item.artist}-${index}`}>
                                <div className="carousel-slide">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="carousel-img"
                                    />

                                    {/* Nome artista con glassmorphism */}
                                    <div className="carousel-artist-name">
                                        <p className="text-white/40">{item.artist}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Pulsante Successivo */}
                <button
                    onClick={goToNext}
                    className="z-20 p-2 hover:bg-gray-300 duration-300 rounded-full mx-4 flex-shrink-0"
                    aria-label="Next Slide"
                >
                    <FaArrowRight className="text-[2.5rem] cursor-pointer" />
                </button>
            </div>
        </div>
    );
};
