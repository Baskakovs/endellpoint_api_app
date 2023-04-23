import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const Row = tw.div`flex flex-col items-center lg:flex-row -mb-10 lg:mb-20`;
const Heading = tw(SectionHeading)`w-full text-gray-800`;
const PopularPostsContainer = tw.div`lg:w-full mx-5`;
const PostsContainer = tw.div`mt-12 flex flex-wrap justify-center`;
const Post = tw(motion.a)`block sm:w-64 mb-16 last:mb-0 sm:mb-0 sm:mr-8 lg:mr-8 xl:mr-16 border border-gray-300 border-dashed border-2 p-4 rounded`;

const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300`;
const Description = tw.p`mt-2 font-medium leading-loose text-sm`;
const Date = tw.p`text-sm italic text-right font-medium text-gray-600`;


const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0 border border-gray-300`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;

export default ({news}) => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  return (
    <Container className="FAQSContainer">
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Recent News</Heading>
            <PostsContainer>
              {! Array.isArray(news) ? null :  
                news.map((newss, index) => (
                  <Post key={index} className="group">
                    <Date>{newss.date}</Date>
                    <Title>{newss.title}</Title>
                    <Description>
                      {newss.description}
                    </Description>
                  </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
