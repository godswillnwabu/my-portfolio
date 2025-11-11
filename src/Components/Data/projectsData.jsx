import PortfolioImg from "../../assets/ProjectImages/portfolio-thumbnail.jpg";
import HealthStreetImg from "../../assets/ProjectImages/healthstreet-thumbnail.jpg";
import RentMeImg from "../../assets/ProjectImages/rent-me-thumbnail.jpg";
import ConnakImg from "../../assets/ProjectImages/connak-thumbnail.jpg";
import EstateImg from "../../assets/ProjectImages/estate-thumbnail.jpg";
import FarmtekImg from "../../assets/ProjectImages/farmtek-thumbnail.jpg";
import Cloud9Img from "../../assets/ProjectImages/cloud9-thumbnail.jpg";

import MobilePortfolio from "../../assets/MobileImages/portfolio-img.png";
import MobileHealth from "../../assets/MobileImages/health-street-img.png";
import MobileRentMe from "../../assets/MobileImages/rent-me-img.png";
import MobileConnak from "../../assets/MobileImages/connak-img.png";
import MobileEstate from "../../assets/MobileImages/estate-img.png";
import MobileFarmtek from "../../assets/MobileImages/farmtek-img.png";
import MobileCloud9 from "../../assets/MobileImages/cloud9-img.png";


const projectsData = [
    {
        id: 1,
        Image: PortfolioImg,
        ImageTwo: MobilePortfolio,
        title: "Portfolio Site",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "Live",
        description: "A personal portfolio rebuilt with React and Tailwind CSS to create a modern, responsive design. Originaly built with Vanilla JS, this version reflects my growth as a  developer and showcase my latest projects and design style.",
        projectUrl: "https://my-portfolio-home.vercel.app/",
        githubUrl: "https://github.com/godswillnwabu/my-portfolio"
    },
    {
        id: 2,
        Image: HealthStreetImg,
        ImageTwo: MobileHealth,
        title: "Health Street",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "Live",
        description: "The site allows users to send medical reports, schedule bookings, and manage appointments seamlessly.",
        // projectUrl: "https://via.placeholder.com/300x200.png?text=Portfolio+Site",
        // githubUrl: "https://github.com/my-portfolio"
    },
    {
        id: 3,
        Image: RentMeImg,
        ImageTwo: MobileRentMe,
        title: "Rent Me - hackathon",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "In Progress",
        description: "Rent Me is a rental solution platform created to help students find apartments near their campuses. Built collaboratively by a three-member team, it focuses on simplifying the search and connection between students and landlords.",
        projectUrl: "https://rent-me-app.vercel.app/",
        githubUrl: "https://github.com/godswillnwabu/rent-me-app"
    },
    {
        id: 4,
        Image: ConnakImg,
        ImageTwo: MobileConnak,
        title: "Connak Foundation",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "Live",
        description: "A humanitarian organization focused on supporting people in need. I volunteered to redesign and rebuild their front-end to improve accessibility and visual appeal. The front-end is live, with plans for future back-end integration.",
        projectUrl: "https://connak-non-profit-html.vercel.app/",
        githubUrl: "https://github.com/godswillnwabu/Connak-Non-Profit-Website"
    },
    {
        id: 5,
        Image: EstateImg,
        ImageTwo: MobileEstate,
        title: "Estate Landing Page",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "Live",
        description: "A modern real estate landing page I designed and developed as a personal learning project. Inspired by an existing site, I rebuilt from scratch while experimenting with new fonts, colors, and layout improvements to enhance both design and usability.",
        projectUrl: "https://real-estate-landing-page-two.vercel.app/",
        githubUrl: "https://github.com/godswillnwabu/real-estate-landingpage"
    },
    {
        id: 6,
        Image: FarmtekImg,
        ImageTwo: MobileFarmtek,
        title: "Farmtek E-commerce",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "In Progress",
        description: "An e-commerce platform designed and developed to connect farmers directly with customers for agricultural products. The site is live and functional (not responsive), though still in development as I continue refining its features and expanding its capabilities. ",
        projectUrl: "https://farmtek.vercel.app/",
        githubUrl: "https://github.com/godswillnwabu/farmtek-website"
    },
    {
        id: 7,
        Image: Cloud9Img,
        ImageTwo: MobileCloud9,
        title: "Cloud 9 Landing Page",
        captionOne: "Web Design",
        captionTwo: "Development",
        captionThree: "Live",
        description: "Cloud9 is a landing page for a cloud services platform, fully designed and developed by me. The project stands out as my first real experience working with illustrations, which helped me better understand how visuals can enhance both clarity and appeal in web design.",
        projectUrl: "https://godswillnwabu.github.io/landingpage-cloudbased-platform/",
        githubUrl: "https://github.com/godswillnwabu/cloudbase-landingpage"
    },

]

export default projectsData;