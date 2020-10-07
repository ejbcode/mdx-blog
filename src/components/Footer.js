import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from '../elements';

export const Footer = () => (
  <FooterWrapper>
    <FooterSocialWrapper>
      <FooterSocialIcons>
        <a
          href="facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="FB logo"
        >
          <AiOutlineFacebook />
        </a>
        <a
          href="facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="FB logo"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="FB logo"
        >
          <AiOutlineTwitter />
        </a>
      </FooterSocialIcons>
      <p>20202 </p>
    </FooterSocialWrapper>
  </FooterWrapper>
);

export default Footer;
