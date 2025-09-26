import { useState, useEffect, useMemo } from 'react';
import type { CarouselItem } from '@/data/carouselData';

export const useCarousel = (data: CarouselItem[], itemsToClone = 2) => {
    const [currentIndex, setCurrentIndex] = useState(itemsToClone);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    // l'array infinito con i cloni
    const items = useMemo(() => {
        if (data.length === 0) return [];
        const startClones = data.slice(-itemsToClone);
        const endClones = data.slice(0, itemsToClone);
        return [...startClones, ...data, ...endClones];
    }, [data, itemsToClone]);

    // Gestione infinity loop
    useEffect(() => {
        if (currentIndex < itemsToClone || currentIndex >= data.length + itemsToClone) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                const newIndex = currentIndex < itemsToClone
                    ? data.length + currentIndex
                    : currentIndex - data.length;
                setCurrentIndex(newIndex);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, data.length, itemsToClone]);

    // Re-abilita la transizione
    useEffect(() => {
        if (!transitionEnabled) {
            const timer = setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    const goToPrevious = () => {
        if (items.length > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const goToNext = () => {
        if (items.length > 0) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    return {
        currentIndex,
        items,
        transitionEnabled,
        goToPrevious,
        goToNext,
    };
};
