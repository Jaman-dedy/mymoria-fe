// components/pages/ProductDetailsPage.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { BackButton, Container, DescriptionContainer, GalleryContainer, GalleryImage, PreviewContainer, PreviewImage, Price, ProductName, RatingContainer, RatingStar, WishlistButton } from './DetailsStyles';
import MainTemplate from '../../template/MainTemplate';



const ProductDetailsPage: React.FC = () => {
    const navigate = useNavigate()
  const location = useLocation();
  const {state} = location
  const {translations, pictures} = state
  const [previewImage, setPreviewImage] = useState(pictures[0].url);

  
  const handleGalleryClick = (image: string) => {
    setPreviewImage(image);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <MainTemplate>
        <Container>
        <BackButton onClick={handleBackButtonClick}>
        &lt; Back
      </BackButton>
      <ProductName>{translations.shortname}</ProductName>
      <Price>${state.price.toFixed(2)}</Price>
      <RatingContainer>
        <RatingStar>⭐</RatingStar>
        <span>{state.rating}</span>
      </RatingContainer>
      <DescriptionContainer>
        <ReactMarkdown>{translations.description}</ReactMarkdown>
      </DescriptionContainer>
      <PreviewContainer>
        <PreviewImage src={previewImage} alt="Product Preview" />
      </PreviewContainer>
      <GalleryContainer>
        { pictures.length && pictures.map((image:any, index:any) => (
          <GalleryImage
            key={index}
            src={image.url}
            alt={`Product ${index + 1}`}
            onClick={() => handleGalleryClick(image.url)}
          />
        ))}
      </GalleryContainer>
      <p>
        <strong>Shortname:</strong> {translations.shortname}
      </p>
      <p>
        <strong>Color:</strong> {translations.properties?.color}
      </p>
      <p>
        <strong>Size:</strong> {translations.properties?.size}
      </p>
      <p>
        <strong>Weight:</strong> {translations.properties?.weight}
      </p>
      <p>
        <strong>Number:</strong> {translations.properties?.number}
      </p>
      <WishlistButton>Add to Wishlist</WishlistButton>
    </Container>
    </MainTemplate>
    
  );
};

export default ProductDetailsPage;
