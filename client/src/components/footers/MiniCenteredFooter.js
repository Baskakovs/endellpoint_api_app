import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/Logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import {PrimaryButton} from "components/misc/Buttons.js";
import { useNavigate } from "react-router-dom";


const Container = tw(ContainerBase)`bg-blue-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 my-8 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-yellow-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-yellow-500 hocus:border-green-700`


const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-100">
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Terms & Conditions</Link>
            <Link href="/contact-us">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
          <SocialLink>
            <a href="https://www.facebook.com/endellpoint">
              <FacebookIcon />
            </a>
          </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, Endellpoint. All rights reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
    </div>
  );
};
