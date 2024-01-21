// components/pages/ProductDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import NavBar from '../../organisms/Navbar';
import Footer from '../../organisms/Footer';

const productDetails = {
  id: 1,
  name: 'Beautiful Product',
  shortname: 'Product ABC',
  description: 'This is a detailed description of the product. It can contain **multiple lines**. ```yes```',
  price: 99.99,
  images: [
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
  ],
  rating: 4.5,
  details: {
    color: 'Blue',
    size: 'Medium',
    weight: '1.5 kg',
    number: '123456',
  },
};

const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const PreviewContainer = styled.div`
  margin-bottom: 20px;
  overflow: hidden; /* Hide overflowing content */
`;

const PreviewImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Make the gallery scrollable */
  margin-bottom: 20px;
`;

const GalleryImage = styled.img`
  max-width: 80px;
  margin-right: 10px;
  border: 1px solid #ddd; 
  cursor: pointer;

  &:hover {
    border-color: #01a76f;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RatingStar = styled.span`
  color: #ffd700;
  font-size: 20px;
  margin-right: 5px;
`;

const WishlistButton = styled.button`
  background-color: #01a76f;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #006644;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  ul {
    margin-bottom: 10px;
    padding-left: 20px;
  }

  ol {
    margin-bottom: 10px;
    padding-left: 20px;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    background-color: #f4f4f4;
    padding: 2px 5px;
    border-radius: 4px;
  }

  blockquote {
    border-left: 3px solid #01a76f;
    padding-left: 10px;
    margin-left: 0;
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

  &:hover {
    color: #006644; 
  }
`;

const ProductDetailsPage: React.FC = () => {
    const navigate = useNavigate()
  const location = useLocation();
  console.log('location :>> ', location);
  const [previewImage, setPreviewImage] = useState(productDetails.images[0]);

  const {state} = location
  const {translations, pictures} = state
  const handleGalleryClick = (image: string) => {
    setPreviewImage(image);
  };

  useEffect(() => {
    setPreviewImage(pictures[0].url)
  }, [])

  const product = productDetails;

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
        <NavBar/>
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
    <Footer/>
    </div>
    
  );
};

export default ProductDetailsPage;
