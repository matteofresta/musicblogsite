import { Home } from "@/pages/Home.tsx";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
