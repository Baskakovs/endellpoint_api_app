import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/Logo.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";

//PDFs import

import MobileAppPDF from '../../pdf/mobile_app_policy.pdf'
import WebsitePDF from '../../pdf/website_terms_of_use.pdf'
import CookiesPDF from '../../pdf/cookies_policy.pdf'
import PrivacyPolicy from "../../pdf/privacy_policy.pdf";

const Container = tw.div`relative bg-blue-900 text-gray-100 -mb-8 `;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-start lg:pl-6`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 lg:pl-2 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 
lg:pr-6 text-sm font-normal flex flex-col sm:flex-row justify-end items-center`
const CopyrightNotice = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              {/* <LogoImg src={LogoImage} /> */}
              <LogoText>Endellpoint</LogoText>
            </LogoContainer>
            {/* <CompanyAddress>
              123 Road, New Startup Building
              Carter Road, San Francisco
              California 40234
            </CompanyAddress> */}
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/endellpoint">
                <FacebookIcon />
              </SocialLink>
              {/* <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink> */}
            </SocialLinksContainer>
          </CompanyColumn>
          {/* <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
          {/* <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Log In</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Personal</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Business</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
          <Column>
            <ColumnHeading>Terms & Conditions</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link
                href={CookiesPDF}
                download="CookiesPDF"
                target="_blank"
                rel="noreferrer">
                  Cookies Policy
                </Link>
              </LinkListItem>
              <LinkListItem>
              <Link
                href={WebsitePDF}
                download="WebsitePDF"
                target="_blank"
                rel="noreferrer">
                  Website Terms of Use
                </Link>
              </LinkListItem>
              <LinkListItem>
              <Link
                href={MobileAppPDF}
                download="MobileAppPDF"
                target="_blank"
                rel="noreferrer">
                  Mobile App T&Cs
                </Link>
              </LinkListItem>
              <LinkListItem>
              <Link
              href={PrivacyPolicy}
              download="PrivacyPolicy"
              target="_blank"
              rel="noreferrer">
                  Privacy Policy
              </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                +44 7513 115954
              </LinkListItem>
              <LinkListItem>
                <Link href="mailto:gonki23ab@gmail.com">gonki23ab@gmail.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2023, Endellpoint. All rights reserved.</CopyrightNotice>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
