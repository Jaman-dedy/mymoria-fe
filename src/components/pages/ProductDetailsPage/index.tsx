// components/pages/ProductDetailsPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
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
  const { id } = useParams<{ id: string }>();
  const [previewImage, setPreviewImage] = useState(productDetails.images[0]);

  const handleGalleryClick = (image: string) => {
    setPreviewImage(image);
  };

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
      <ProductName>{product.name}</ProductName>
      <Price>${product.price.toFixed(2)}</Price>
      <RatingContainer>
        <RatingStar>⭐</RatingStar>
        <span>{product.rating}</span>
      </RatingContainer>
      <DescriptionContainer>
        <ReactMarkdown>{product.description}</ReactMarkdown>
      </DescriptionContainer>
      <PreviewContainer>
        <PreviewImage src={previewImage} alt="Product Preview" />
      </PreviewContainer>
      <GalleryContainer>
        {product.images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            onClick={() => handleGalleryClick(image)}
          />
        ))}
      </GalleryContainer>
      <p>
        <strong>Shortname:</strong> {product.shortname}
      </p>
      <p>
        <strong>Color:</strong> {product.details.color}
      </p>
      <p>
        <strong>Size:</strong> {product.details.size}
      </p>
      <p>
        <strong>Weight:</strong> {product.details.weight}
      </p>
      <p>
        <strong>Number:</strong> {product.details.number}
      </p>
      <WishlistButton>Add to Wishlist</WishlistButton>
    </Container>
    <Footer/>
    </div>
    
  );
};

export default ProductDetailsPage;
