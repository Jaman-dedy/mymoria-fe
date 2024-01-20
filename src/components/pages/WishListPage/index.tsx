import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../organisms/Footer';
import NavBar from '../../organisms/Navbar';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WishlistTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const WishlistItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e8ecee;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ItemDescription = styled.p`
  color: #677784;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #c0392b;
  }
`;

const BackButton = styled.button`
  color: #01a76f;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    color: #006644;
  }
`;

const ArrowIcon = styled.span`
  margin-right: 5px;
`;

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();

  const wishlistItems = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  const handleRemoveItem = (itemId: number) => {
  };

  return (
    <div>
        <NavBar/>
       <Container>
      <BackButton onClick={() => navigate('/')}>
        <ArrowIcon>&lt;</ArrowIcon> Back
      </BackButton>
      <WishlistTitle>My Wishlist</WishlistTitle>
      {wishlistItems.map((item) => (
        <WishlistItem key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemDetails>
          <RemoveButton onClick={() => handleRemoveItem(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </RemoveButton>
        </WishlistItem>
      ))}
    </Container> 
    <Footer/>
    </div>
    
  );
};

export default WishlistPage;
