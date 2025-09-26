// hooks/Navbar/useEqualizerEffect.ts
import { useState } from "react";

// Funzione helper per creare un array di altezze casuali
const createRandomBars = (count: number, maxHeight: number) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * maxHeight) + 5);
};

export const useEqualizerEffect = (barCount = 5, maxHeight = 80) => {
    const [barHeights, setBarHeights] = useState(() => createRandomBars(barCount, maxHeight));

    const randomizeHeights = () => {
        setBarHeights(createRandomBars(barCount, maxHeight));
    };

    return { barHeights, randomizeHeights };
};
