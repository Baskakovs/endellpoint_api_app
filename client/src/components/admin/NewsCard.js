import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import Noimage from '../../images/no_image.webp'
import './Admin.css'

function NewsCard({newss}){
    
    const Post = tw(motion.a)`block sm:w-64 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:mr-8 lg:mr-8 xl:mr-16`;
    const Image = styled(motion.div)(props => [
        `background-image: url("${props.$imageSrc}");`,
        tw`h-64 bg-cover bg-center rounded`
    ]);
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
            <Post 
            className="group" 
            initial="rest" 
            whileHover="hover" 
            animate="rest">
                {
                newss.image == undefined ? 
                <Image
                transition={{ duration: 0.3 }}
                variants={postBackgroundSizeAnimation}
                $imageSrc={Noimage}
                />
                 :
                <Image
                transition={{ duration: 0.3 }}
                variants={postBackgroundSizeAnimation}
                $imageSrc={newss.image}
                />
                }
                <Title>{newss.title}</Title>
                <Description>{newss.description}</Description>
                <p><i>{`Name: ${newss.admin.name}`}</i></p>
                <p><i>{`Create at: ${newss.created_at}`}</i></p>
                <p><i>{`Updated at: ${newss.updated_at}`}</i></p>
            </Post>
            </div>
            </div>
        }
        </>


    )
}
export default NewsCard