import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {  useAppDispatch } from '../../../hook/useDispatch'
import Footer from '../../organisms/Footer';
import NavBar from '../../organisms/Navbar';
import { removeToWishlist } from '../../../store/actions/wishlist/removeWishList';
import { ArrowIcon, BackButton, Container, ItemDescription, ItemDetails, ItemImage, ItemName, RemoveButton, WishlistItem, WishlistTitle } from './WishListStyles';


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
