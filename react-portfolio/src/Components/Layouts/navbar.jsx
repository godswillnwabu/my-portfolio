import { useState, useEffect } from "react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";

        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleLinkClink = () => {
        setIsOpen(false)
    }

    return (

        <div className="fixed top-0 left-3 right-3 lg:px-16 md:px-8 px-4 py-5 z-50 bg-black/50 backdrop-blur-md text-white">
            <nav className="flex items-center justify-between">
                <div className="className">
                    <img src="/brand-logo.svg" alt="Logo" className="w-20 inline-block mr-2" />
                </div>

                <ul className="hidden md:flex space-x-8 uppercase tracking-wider">
                    {["home", "projects", "about", "contact"].map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                className={`font-montserrat transition-all duration-300 
                                    ${activeSection === link ? "border-b-2 border-white pb-1 text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="cursor-pointer md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-8 h-1 bg-white rounded transition-all duration-700 ease-in-out ${isOpen ? "rotate-45 translate-y-[10px]" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 bg-white rounded transition-all duration-700 ease-in-out ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-8 h-1 bg-white rounded transition-all duration-700 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                            }`}
                    ></span>

                </div>

                <div className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-t border-gray-700 text-center transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col space-y-4 py-4 uppercase tracking-wider">
                        {["home", "about", "projects", "contact"].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                    onClick={handleLinkClink}
                                    className={`font-montserrat transition-all duration-300 
                                    ${activeSection === link ? "border-b-2 border-white pb-1 text-white" : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;