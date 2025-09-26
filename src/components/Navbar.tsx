import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="flex absolute z-50 justify-between items-center backdrop-blur-md bg-white/30 w-full h-20 shadow-md px-20">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to={"/"}>
                    <img
                        className="cursor-pointer h-10"
                        src="/logo.png"
                        alt="logo"
                        aria-label="Logo Page"
                    />
                </Link>
            </div>

            {/* Navigation Menu - CENTRATO */}
            <div className="flex-1 flex justify-center">
                <ul className="flex gap-8 items-center">
                    <li>
                        <Link
                            to="/"
                            className="cursor-pointer bg-white/20 hover:bg-white/40 px-4 py-2 rounded-2xl transition-all duration-300 text-gray-800 font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/recommended-music"
                            className="cursor-pointer bg-white/20 hover:bg-white/40 px-4 py-2 rounded-2xl transition-all duration-300 text-gray-800 font-medium"
                        >
                            Recommended Music
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tell-us-about-your-music"
                            className="cursor-pointer bg-white/20 hover:bg-white/40 px-4 py-2 rounded-2xl transition-all duration-300 text-gray-800 font-medium whitespace-nowrap"
                        >
                            Tell us about your Music
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-shrink-0">
                <Button className="bg-gray-100 text-black hover:text-gray-200 hover:bg-black cursor-pointer shadow-md border border-gray-300/50 transition-all duration-300">
                    Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-200 hover:text-black cursor-pointer shadow-md transition-all duration-300">
                    Register
                </Button>
            </div>
        </div>
    );
};
