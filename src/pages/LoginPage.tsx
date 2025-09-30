import { usePasswordCheck } from "@/hooks/LoginPage/usePasswordCheck.ts";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import {Navbar} from "@/components/Navbar.tsx";

export const LoginPage = () => {

    const { isVisible, togglePasswordVisibility } = usePasswordCheck();

    return (
        <div>
            <Navbar/>
            <div className={"w-full h-screen flex items-center justify-center"}>
                <fieldset className="fieldset bg-white border-none shadow-2xl flex flex-col items-start justify-center rounded-2xl h-[20rem] w-xs border p-4">
                    <legend className="fieldset-legend text-black">Login</legend>

                    <label className="label flex">Email</label>
                    <input type="email" className="input bg-gray-300" placeholder="Email" />

                    <label className="label">Password</label>
                    <div className="relative w-full flex items-center">
                        <input
                            type={isVisible ? "text" : "password"}
                            className="input bg-gray-300 w-full pr-10"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 p-1 rounded-full hover:bg-gray-400/50 duration-300"
                        >
                            {isVisible ? (
                                <FaEye className="text-gray-600 text-xl cursor-pointer" />
                            ) : (
                                <PiEyeClosedBold className="text-gray-600 text-xl cursor-pointer" />
                            )}
                        </button>
                    </div>

                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                </fieldset>
            </div>
        </div>
    );
}
