/*
 * -----------------------------------------------------------------------------
 *  File:         Footer.tsx
 *  Description:  Home page for the application.
 *
 *  Author:       Matteo Fresta
 *  Copyright:    Copyright (c) 2025 Matteo Fresta. All rights reserved.
 * -----------------------------------------------------------------------------
 */


import { Navbar } from "@/components/Navbar.tsx";
import {Header} from "@/components/Header.tsx";
import {MainContent} from "@/components/MainContent.tsx";
import {Footer} from "@/components/Footer/Footer.tsx";

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
};
