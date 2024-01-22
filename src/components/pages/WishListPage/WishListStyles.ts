import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const WishlistTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const WishlistItem = styled.div`
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

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ItemDescription = styled.p`
  color: #677784;
`;

export const RemoveButton = styled.button`
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

export const ArrowIcon = styled.span`
  margin-right: 5px;
`;