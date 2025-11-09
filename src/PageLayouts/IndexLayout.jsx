import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layouts/navbar";
import Footer from "../Components/Layouts/footer";

function IndexLayout() {

    return (
        <div className="px-3">
        <Navbar />
        <Outlet />
        <Footer />
        </div>
    ) 
}

export default IndexLayout