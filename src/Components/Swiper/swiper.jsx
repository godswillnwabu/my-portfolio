import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import projectsData from '../Data/projectsData';

function ProjectSwiper() {

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className=''
        >
            {projectsData.map((project) => (
                <SwiperSlide key={project.id}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-15 px-5 md:px-10 lg:px-20 pt-10'>

                        <div className='hidden lg:block'>
                            <img src={project.Image} alt={project.title} 
                            className='w-full h-9/10 object-contain'/>
                        </div>

                        <div className='flex flex-col items-center lg:items-start'>
                            <h2 className='tracking-wider text-3xl md:text-5xl lg:text-4xl font-bold mb-4'>
                                {project.title}
                            </h2>
                            <div className='flex gap-3 mb-10'>
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

                            <p className='tracking-wide leading-relaxed mb-10'>
                                {project.description}
                            </p>

                            <div>
                                <a href={project.projectUrl}
                                target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white py-2 px-6 mr-10"
                                >
                                    Demo
                                </a>
                                <a href={project.githubUrl}
                                target="_blank" rel="noopener noreferrer" className="inline-block border py-2 px-6"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ProjectSwiper;