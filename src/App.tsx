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
