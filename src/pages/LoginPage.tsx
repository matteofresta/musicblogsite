import { useEffect, useState } from "react";
import { usePasswordCheck } from "@/hooks/LoginPage/usePasswordCheck.ts";
import {motion} from "motion/react";
import { Input, Button } from '@/components/ui'
import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import {Navbar} from "@/components/Navbar.tsx";
import { LoadingSkeleton } from "@/components/ui/shadcn/skeleton";

export const LoginPage = () => {
    const { isVisible, togglePasswordVisibility } = usePasswordCheck();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    }, [isLoading])



    return (
        <div>
            <Navbar/>
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)"}}
                animate={{ opacity: 1, filter: "none", y: 10 }}
                className={"w-full h-screen flex items-center justify-center"}>
                {isLoading ? (<LoadingSkeleton variant="Login" />
                ) : (
                <fieldset className="fieldset bg-white border-none shadow-2xl flex flex-col items-start justify-center rounded-2xl h-[20rem] w-xs border p-4">

                    <legend className="fieldset-legend text-black">Login</legend>

                    <label className="label flex">Email</label>
                    <Input type="email" className="bg-gray-300 w-full h-10 pr-10" placeholder="Email" />

                    <label className="label">Password</label>
                    <div className="relative w-full flex items-center">
                        <Input
                            type={isVisible ? "text" : "password"}
                            className="bg-gray-300 w-full h-10 pr-10"
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
                    <motion.div whileHover={{ scale: 1.05 }} className={"w-full"}>
                        <Button className="btn btn-neutral mt-4 w-full">Login</Button>
                    </motion.div>
                </fieldset>
                )}
            </motion.div>
        </div>
    );
}
