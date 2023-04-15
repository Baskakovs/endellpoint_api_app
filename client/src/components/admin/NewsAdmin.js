import { useEffect } from "react";
import Nav from "./Nav"
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
function NewsAdmin(){
const Post = tw(motion.a)`block sm:w-64 cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;
const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  useEffect(() => {
    fetch("/news",
    {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
    })
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                console.log(data)
            })
        }else{
            console.log("error")
        }
    })
}, [])


    return(
        <>
        <Nav />
        <h1>Here is a list of all your news</h1>
        <div class="">
            <Post 
            // href={post.url} 
            className="group" 
            initial="rest" 
            whileHover="hover" 
            animate="rest">
                <Image
                transition={{ duration: 0.3 }}
                variants={postBackgroundSizeAnimation}
                $imageSrc={""}
                />
                <Title>Title</Title>
                <Description>Description</Description>
                <p><i>12/05/2023</i></p>
            </Post>
            <div class="card">
            </div>
            <div class="card">
            </div>
        </div>
        </>
    )
}
export default NewsAdmin