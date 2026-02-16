import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";

const Courses = () => {
    return (
        <div className="pt-20 min-h-screen flex flex-col">
            <Navbar />
            <Course />
            <Footer />
        </div>
    );
};

export default Courses;
