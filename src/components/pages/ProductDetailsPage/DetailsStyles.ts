import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PreviewContainer = styled.div`
  margin-bottom: 20px;
  overflow: hidden; /* Hide overflowing content */
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Make the gallery scrollable */
  margin-bottom: 20px;
`;

export const GalleryImage = styled.img`
  max-width: 80px;
  margin-right: 10px;
  border: 1px solid #ddd; 
  cursor: pointer;

  &:hover {
    border-color: #01a76f;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const RatingStar = styled.span`
  color: #ffd700;
  font-size: 20px;
  margin-right: 5px;
`;

export const DescriptionContainer = styled.div`
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


export const BackButton = styled.button`
  color: #0D0C22;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    color: #15133c;
  }
`;