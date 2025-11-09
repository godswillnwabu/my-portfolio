import { FaPenNib, FaReact, FaCloudArrowUp, FaDatabase } from "react-icons/fa6";

const aboutData = [
    {
        id: 1,
        icon: <FaPenNib />,
        title: "Design",
        tools: ["Figma"],
        description: "Craft intuitive and visually appealing UI mockups for a smooth user experience."
    },
    {
        id: 2,
        icon: <FaReact />,
        title: "Frontend",
        tools: ["React", "Tailwind CSS", "Bootstrap", "SASS"],
        description: "Build responsive, dynamic interfaces for clean, efficient user interactions."
    },
    {
        id: 3,
        icon: <FaDatabase />,
        title: "Backend",
        tools: ["Node.js", "Express", "MongoDB", "Python"],
        description: "Develop and manage scalable server-side logic using MERN stack & Python."
    },{
        id: 4,
        icon: <FaCloudArrowUp />,
        title: "Hosting",
        tools: ["Vercel", "Render", "GitHub Pages","Netlify"],
        description: "Deploy and manage web apps seamlessly across reliable hosting platforms."
    },
]

export default aboutData;