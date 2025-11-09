import HeroSection from "./Sections/HeroSection/hero";
import AboutSection from "./Sections/AboutSection/about";
import ProjectSection from "./Sections/ProjectSection/project";
import ContactSection from "./Sections/ContactSection/contact";



function LandingPage() {

    return (
        <>
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </>

    )
}

export default LandingPage;