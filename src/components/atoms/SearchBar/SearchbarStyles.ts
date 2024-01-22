import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
`;