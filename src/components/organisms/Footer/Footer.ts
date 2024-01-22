import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

export const SocialIcons = styled.div`
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

export const MenuItems = styled.ul`
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