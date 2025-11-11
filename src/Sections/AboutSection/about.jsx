import aboutData from "../../Components/Data/aboutData";

function AboutSection() {

    return (
        <section id="about" className="w-full h-auto flex flex-col items-center justify-center pt-20 lg:pt-40">

            <div className="text-center max-w-5xl px-4">
                <h2 className="font-michroma text-4xl md:text-6xl text-center capitalize mb-10">What I Do:</h2>

                <p className="font-poppins leading-relaxed">
                    I build, design, and deploy modern web solutions with attention to both aesthetics and performance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mb-20 lg:mb-40">
                {aboutData.map((item) => (
                    <div key={item.id} className="flex flex-col justify-center items-center text-center max-w-4xl border-2 border-black/25 p-2">
                        <span className="mb-2">{item.icon}</span>
                        <h5 className="font-poppins font-bold mb-3 uppercase">{item.title}</h5>
                        <span className="font-oswald text-xs tracking-wider mb-3">{item.tools.join(", ")}</span>
                        <p className="font-poppins text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>


            <div className="h-px bg-gray-300/60 w-9/10"></div>
        </section>
    )
}

export default AboutSection;