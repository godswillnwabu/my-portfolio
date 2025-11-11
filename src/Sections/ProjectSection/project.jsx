// import ProjectSwiper from "../../Swiper/swiper";
import MySwiper from "../../Components/Swiper/projectSwiper";

function ProjectSection() {
    return (
        <section id="projects" className="w-full h-auto pt-20 lg:pt-40">
            <div className="">
                <h1 className="font-michroma text-xl md:text-2xl text-center text-black/25 uppercase">My Latest Projects</h1>

                <MySwiper />
                
            </div>
        </section>
    )
}

export default ProjectSection;
