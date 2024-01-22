import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 200px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 40px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  margin-left: -40px;
  display: flex;
  align-items: center;
  color: #555;

  svg {
    font-size: 18px;
  }
`;
