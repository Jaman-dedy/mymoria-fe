// components/atoms/SearchBar.tsx
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
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
interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onSearch?(event.target?.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search products..."
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
