import tw from "twin.macro";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './Admin.css'

function NewsCard({newss}){
    
    const Post = tw(motion.a)`block sm:w-64 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:mr-8 lg:mr-8 xl:mr-16`;
    const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
    const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;

    const postBackgroundSizeAnimation = {
    rest: {
        backgroundSize: "100%"
    },
    hover: {
        backgroundSize: "110%"
    }
    };

    return (
        <>
        {
            newss == undefined ? null :
            <div className="admin-news-container">
            <div className="admin-news-card">
            <Link to={`/admin/edit_news/${newss.id}`}>
            <Post 
            className="group" 
            initial="rest" 
            whileHover="hover" 
            animate="rest">
                <Title>{newss.title}</Title>
                <Description>{newss.description}</Description>
                <p><i>{`By: ${newss.admin.name}`}</i></p>
                <p><i>{`Date: ${newss.date}`}</i></p>
                <p><i>{`Create at: ${newss.created_at}`}</i></p>
                <p><i>{`Updated at: ${newss.updated_at}`}</i></p>
            </Post>
            </Link>
            </div>
            </div>
        }
        </>


    )
}
export default NewsCard