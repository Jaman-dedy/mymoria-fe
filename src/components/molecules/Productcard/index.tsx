import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


import { addToWishlist } from '../../../store/actions/wishlist/addWishList';
import { useAppDispatch, useAppSelector } from '../../../hook/useDispatch'
import { CardContainer, CardImage, CardContent, CardText, CardDescription, CardActions, WishlistIconContainer, HeartIcon, WishlistText } from './CardStyles'
import { ProductProps } from '../../../types';


const ProductCard: React.FC<ProductProps | any> = ({ product }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const wishlist = useAppSelector((state: any) => state.wishLists.wishlist);
  const { pictures, translations } = product ?? {}

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, {
      state: product
    })
  };

  const handleAddToWishlist = (e: any) => {
    e.stopPropagation();
    dispatch(addToWishlist(product.id))
  };

  const isProductInWishlist = (productId: string) => {
    return wishlist.some((item:any) => item.id === productId);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardImage src={pictures[0].url} alt="Product" />
      <CardContent>
        <CardText>Description</CardText>
        <CardDescription>
          {translations.name}
        </CardDescription>
      </CardContent>
      <CardActions>
        <WishlistIconContainer>
          <WishlistText>10k</WishlistText>
          <HeartIcon 
          onClick={handleAddToWishlist} 
          wishlisted={isProductInWishlist(product.id)}
          icon={faHeart} 
          />
        </WishlistIconContainer>
      </CardActions>
    </CardContainer>
  );
};

export default ProductCard;
