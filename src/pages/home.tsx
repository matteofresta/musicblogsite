import { Navbar } from "@/components/Navbar.tsx";
import {Header} from "@/components/Header.tsx";
import {MainContent} from "@/components/MainContent.tsx";

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <MainContent />
    </div>
  );
};
