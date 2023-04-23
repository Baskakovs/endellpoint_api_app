import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Container = tw.div`relative bg-yellow-400 -mx-8 px-8 text-gray-700`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-700`;
const Heading = tw(SectionHeading)`w-full text-gray-800`;
const Description = tw(SectionDescription)`w-full text-center text-gray-600`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center p-6 flex-shrink-0`}
    border-radius: 50%;
    img {
      ${tw`w-4 h-4`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-600 leading-snug`}
  }
};`

export default ({
  cards = null,
  subheading = "",
  heading = "How It Works",
  description = "Four simple steps to gain control over your delievery time preferences:"
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  // Images Original
  // import ShieldIconImage from "images/shield-icon.svg";
  // import SupportIconImage from "images/support-icon.svg";
  // import CustomizeIconImage from "images/customize-icon.svg";
  // import FastIconImage from "images/fast-icon.svg";
  // import ReliableIconImage from "images/reliable-icon.svg";
  // import SimpleIconImage from "images/simple-icon.svg";

  const defaultCards = [
    {
      icon: faMobileScreenButton,
      title: "Download the Endell Point app for faster checkout",
      description: "Our app will be available on the App Store and Google Play Store soon."
    },
    { 
      icon: faTruck, 
      title: "Order your parcel to an Endell Point location",
      description: "You can a choose a location that is most convenient for you. "
     },
    { 
      icon: faBarcode, 
      title: "Upload your tracking number to the Endell Point app",
      description: "You can track your parcel from the app and get updates on your delivery."
    },
    { icon: faBox,
      title: "Collect you parcel",
      description: "You can collect your parcel at your convenience."
    },

  ];

  if (!cards) cards = defaultCards;

  return (
    <div className="w-100">
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <FontAwesomeIcon 
                icon={card.icon} 
                style={{color: "#333333",}}
                size="xl"/>
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
    </div>
  );
};
