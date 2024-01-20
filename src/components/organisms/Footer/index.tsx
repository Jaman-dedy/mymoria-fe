// components/organisms/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-bottom: 20px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: #01a76f;
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 20px;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

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
