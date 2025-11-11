import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

import projectsData from "../Data/projectsData";

import { FaGithub, FaPlay } from "react-icons/fa6";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const MySwiper = () => {
    const swiperRef = useRef(null)

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,

            injectStyles: [
                `
                @media (min-width: 1024px) {
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: 50px;
                        height: 50px;
                        font-size: 24px;
                    }
                }

                @media (max-width: 1023px) {
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: 20px;
                        height: 20px;
                        font-size: 14px;
                    }
                }

                .swiper-button-next,
                .swiper-button-prev {
                    background-color: rgba(0,0,0,0.5);
                    border-radius: 50%;
                    padding: 8px;
                    color: white;
                }
                `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <swiper-container ref={swiperRef} init="false">
            {projectsData.map((project) => (
                <swiper-slide key={project.id}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-15 px-5 md:px-10 lg:px-20 pt-10'>

                        <div className='hidden lg:block'>
                            <img src={project.Image} alt={project.title}
                                className='w-full h-9/10 object-contain' />
                        </div>

                        <div className="block lg:hidden">
                            <img src={project.ImageTwo} alt={project.title} 
                                className="w-full h-8/10 object-contain" />
                        </div>

                        <div className='flex flex-col items-center lg:items-start'>
                            <h2 className='font-montserrat tracking-wider text-2xl md:text-5xl lg:text-4xl font-bold mb-4'>
                                {project.title}
                            </h2>
                            <div className='flex gap-3 mb-10 font-oswald tracking-wide'>
                                <span className='text-white text-sm bg-black px-2 py-1'>
                                    {project.captionOne}
                                </span>
                                <span className='text-white text-sm bg-black px-2 py-1'>
                                    {project.captionTwo}
                                </span>
                                <span className='text-white text-sm bg-black px-2 py-1'>
                                    {project.captionThree}
                                </span>
                            </div>

                            <p className='font-poppins leading-relaxed mb-10 text-center md:text-justify'>
                                {project.description}
                            </p>

                            <div className="flex items-center">
                                {!project.projectUrl && !project.githubUrl ? (
                                    <span className="bg-black text-white py-2 px-6 flex items-center gap-2 font-bold font-montserrat"
                                    >
                                        Private
                                        <RiGitRepositoryPrivateFill />
                                    </span>
                                ) : (
                                    <>
                                        {project.projectUrl && (
                                            <a href={project.projectUrl}
                                                target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-6 mr-10 flex items-center gap-2 font-bold font-montserrat"
                                            >
                                                Demo
                                                <FaPlay />
                                            </a>
                                        )}

                                        {project.projectUrl && (
                                            <a href={project.githubUrl}
                                                target="_blank" rel="noopener noreferrer" className="border py-2 px-6 flex items-center gap-2 font-bold font-montserrat"
                                            >
                                                Code
                                                <FaGithub />
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
    )
}

export default MySwiper;