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

    function convertDate(isoString){
        const date = new Date(isoString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
    return(formattedDate);
    }

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
                <p>{newss.description}</p>
                <Description><i>{`By: ${newss.admin.name}`}</i></Description>
                <Description><i>{`Date: ${newss.date}`}</i></Description>
                <Description><i>{`Create at: ${convertDate(newss.created_at)}`}</i></Description>
                <Description><i>{`Updated at: ${convertDate(newss.updated_at)}`}</i></Description>
            </Post>
            </Link>
            </div>
            </div>
        }
        </>


    )
}
export default NewsCard