import tw from "twin.macro";
import { motion } from "framer-motion";
import './Admin.css'
import { Link } from "react-router-dom";

const Post = tw(motion.a)`block w-full md:w-1/2 lg:w-1/3 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:mr-0 md:mr-8 lg:mr-8 xl:mr-16`;
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;

function LocationCard({location}){

    return (
        <>
        {
            location == undefined ? null :
            <div className="admin-news-container">
            <Link to={`/admin/edit_location/${location.id}`}>
            <div className="admin-news-card">
            <Post 
            className="group" 
            initial="rest" 
            whileHover="hover" 
            animate="rest"
            >
                <Title>{location.address_name}</Title>
                <p>{location.buidling_number}</p>
                <p>{location.street}</p>
                <p>{location.postcode}</p>
                <p><i>{location.show == true ? "Visible" : "Not visible"}</i></p>
            </Post>
            </div>
            </Link>
            </div>
        }
        </>


    )
}
export default LocationCard;
