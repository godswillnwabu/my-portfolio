import Background from "../../Background";

import { FaDownload } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

function HeroSection() {

    return (
        <section id="home" className="relative w-full min-h-screen md:h-[100dvh] flex items-center justify-center text-center text-white overflow-y-auto">

            <Background />

            <div className="z-10 max-w-4xl px-4 py-20">

                <div className="mt-5 md:mt-20">
                    <h1 className="font-michroma text-3xl md:text-5xl font-bold mb-7 tracking-wider">Hi, I'm Godswill</h1>
                    <p className="font-poppins mb-15 tracking-widest leading-relaxed">
                        I am a software developer who crafts user-friendly interfaces and builds efficient backend systems. With years of hands-on experience in coding and debugging, I enjoy turning ideas into functional, high-performance applications. My goal is always to deliver fast, responsive, and reliable websites that feel seamless across all devices.
                        <span className="hidden md:block mt-4">
                            In addition, I have earned certifications from AltSchool Africa, Udemy and SoloLearn, each strengthening my understanding of modern web tehnologies and industry best practices.
                        </span>
                    </p>
                </div>

                <div className="flex items-center justify-center space-x-5 md:space-x-10">
                    <div className="">
                        <a href="#projects" 
                        className="font-montserrat border text-white py-2 px-8 flex items-center gap-2">
                            Projects
                            <FaTasks />
                        </a>
                    </div>
                    <div className="">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Resume.pdf"
                        className="font-montserrat bg-[#3333ffcc] hover:bg-[#33f] text-white py-2 px-8 transition-colors duration-300 flex items-center gap-2">
                            Resume
                            <FaDownload />
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-10 mt-10 lg:mt-20 text-sm">
                    <a href="https://github.com/godswillnwabu" 
                        target="_blank" rel="noopener noreferrer"
                        className="font-oswald underline underline-offset-4 tracking-widest"
                    >Github</a>
                    
                    <a href="https://www.linkedin.com/in/godswillnwabu" 
                        target="_blank" rel="noopener noreferrer"
                        className="font-oswald underline underline-offset-4 tracking-widest"
                    >LinkedIn</a>

                    <a href="mailto:godswillnwabeke50@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="font-oswald underline underline-offset-4 tracking-widest"
                    >Gmail</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;