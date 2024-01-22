import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {  useAppDispatch } from '../../../hook/useDispatch'
import Footer from '../../organisms/Footer';
import NavBar from '../../organisms/Navbar';
import { removeToWishlist } from '../../../store/actions/wishlist/removeWishList';

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
    cursor: pointer;
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

interface WishListItems {
  wishlist: [] | any
}

const WishlistPage: React.FC<WishListItems> = ({wishlist}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleRemoveItem = (e:any, itemId: string) => {
    e.stopPropagation();
    dispatch(removeToWishlist(itemId))
  };

  const handleClickWishlist = (product:any) => {
    navigate(`/products/${product.id}`, {
      state: product
    })
  }

  return (
    <div>
        <NavBar/>
       <Container>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowIcon>&lt;</ArrowIcon> Back
      </BackButton>
      <WishlistTitle>My Wishlist</WishlistTitle>
      {wishlist.length > 0 && wishlist.map((item: any) => (
        <WishlistItem onClick={() => handleClickWishlist(item)}  key={item.id}>
          <ItemImage src={item.pictures[0]?.url} alt={item.translations?.name} />
          <ItemDetails>
            <ItemName>{item.translations?.shortname}</ItemName>
            <ItemDescription>{item.translations?.name}</ItemDescription>
          </ItemDetails>
          <RemoveButton onClick={(e) => handleRemoveItem(e,item.id)}>
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
