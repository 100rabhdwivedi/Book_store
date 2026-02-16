import { Link } from "react-router-dom";
import list from "../../public/list.json"
import Cards from './Cards';
const Course = () => {
    return (
        <div className=" mt-8 px-4 py-10 flex flex-col items-center text-center">
            <h1 className="mb-4 text-3xl font-semibold">
                We're delighted to have you{" "}
                <span className="text-pink-500">Here! :)</span>
            </h1>

            <p className="max-w-4xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi
                minus rerum dolore explicabo ut esse commodi officiis architecto earum.
            </p>
            <Link to="/">
            <button className="px-6 py-1 mb-4 cursor-pointer bg-pink-500 text-white rounded-md flex justify-center items-center mt-2">Back</button>
            </Link>
            <div className="flex gap-4 flex-wrap  items-center justify-around ">
            { list.map((item)=>{
                    return <Cards key={item.id} item={item} />
            }) }
            </div>

        </div>
    );
};

export default Course;
