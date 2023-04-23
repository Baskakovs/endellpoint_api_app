import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full text-gray-800`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-700 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-yellow-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-yellow-400`}
`;



export default ({
  subheading = "FAQS",
  heading = "Do You Have Any Questions ?",
  description = "And we have got answers to all of them.",
  faqs = [
    {
      question: "Do I have to use the Endell app?",
      answer:
        "You don't have to use the app - however, we have specifically designed it to make the collection process as quick and seamless as possible. Plus, we will be launching promos and giveaways which will only be available through the app!"
    },
    {
      question: "Where can I download the Endell app?",
      answer:
        "Our app is available in both Apple and Play Store - follow the links to be redirected on your mobile device. Alternatively, you can scan the QR code at the Endell Point till - the code will take you to the relevant download page."
    },
    {
      question: "Can I send any parcels to Endell Point?",
      answer:
        "Yes! We accept parcels from all couriers, and service both online shopping and personal shipments. Just bear in mind the potential size and weight of the incoming parcel - as long as you can carry it, we are happy to accept it for you!"
    },
    {
      question: "How long will you keep my parcel?",
      answer:
        "If you can't collect your parcel straight away, then no worries. We will keep it at our secure facility for up to 21 days. Please note that extra fees may apply if there's a significant delay."
    },
    {
      question: "How much does it cost?",
      answer:
        "We charge £1.20 for each parcel you collect - regardless of parcel size or weight. However, do keep an eye on promotions in our app!"
    },
    {
    question: "How can I pay for my parcels?",
    answer:
      "We offer contactless payments at our points - you can use your phone or bank card to tap the receiver. We also accept payments through PayPal wallets!"
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container className="FAQSContainer">
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {/* {subheading && <Subheading>{subheading}</Subheading>} */}
            <Heading>{heading}</Heading>
            {/* {description && <Description>{description}</Description>} */}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
    </Container>
  );
};
