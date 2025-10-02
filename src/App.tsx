/*
 * -----------------------------------------------------------------------------
 *  File:         Footer.tsx
 *  Description:  App.tsx file with all the components
 *
 *  Author:       Matteo Fresta
 *  Copyright:    Copyright (c) 2025 Matteo Fresta. All rights reserved.
 * -----------------------------------------------------------------------------
 */


import { Home } from "@/pages/Home.tsx";
import { Routes, Route } from "react-router";
import {LoginPage} from "@/pages/LoginPage.tsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
