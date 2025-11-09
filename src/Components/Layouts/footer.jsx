import Background from "../../Background";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="relative w-full h-auto text-white overflow-hidden py-10 md:py-20">

            <Background />

            <div className="flex flex-col md:flex-row justify-between items-center px-20 md:px-40">

                <div className="text-1xl mb-10 md:mb-0 order-first md:order-last flex justify-center">
                    <a href="#home" className="border-2 border-gray-100/30 text-white/70 p-2"
                    ><FaArrowUp className="animate-bounce"/></a>
                </div>

                <div className="gap-5 text-2xl order-first order-last md:order-first flex justify-center">
                    <a href="https://github.com/godswillnwabu" 
                        target="_blank" rel="noopener noreferrer"
                        className="border-2 border-gray-100/30 text-white/70 p-2"
                    ><FaGithub /></a>

                    <a href="https://www.linkedin.com/in/godswillnwabu" 
                        target="_blank" rel="noopener noreferrer"
                        className="border-2 border-gray-100/30 text-white/70 p-2"
                    ><FaLinkedin /></a>

                    <a href="mailto:godswillnwabeke50@gmail.com" 
                        target="_blank" rel="noopener noreferrer"
                        className="border-2 border-gray-100/30 text-white/70 p-2"
                    ><LuMail /></a>
                </div>
            </div>

            <div className="h-px bg-gray-300/90 w-8/10 mx-auto my-10"></div>

            <div className="text-center">
                <p className="font-oswald tracking-wide leading-relaxed text-gray-100/30 text-sm">
                    © 2022 - {currentYear}. <br />
                    My Portfolio. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;