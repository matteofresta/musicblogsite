/*
 * -----------------------------------------------------------------------------
 *  File:         Footer.tsx
 *  Description:  Defines the Main Content component for the application.
 *
 *  Author:       Matteo Fresta
 *  Copyright:    Copyright (c) 2025 Matteo Fresta. All rights reserved.
 * -----------------------------------------------------------------------------
 */


import '@/components/ui/css/carouselEffect.css';
import { CarouselComponent } from "@/components/CarouselComponent.tsx";
import {SongsListRecommended} from "@/components/SongsListRecommended.tsx";


export const MainContent = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-10">
            <h1 className="text-6xl font-bold my-10 text-center">Discover new Music</h1>
            <CarouselComponent />
            <SongsListRecommended />
        </div>
    );
};
