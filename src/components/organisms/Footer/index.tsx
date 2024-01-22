// components/organisms/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FooterContainer, MenuItems, SocialIcons } from './Footer';


const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialIcons>
      <MenuItems>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </MenuItems>
      <p>&copy; 2024 Mymoria. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
