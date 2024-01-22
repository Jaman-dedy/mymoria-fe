// components/atoms/SearchBar.tsx
import React from 'react';
import { SearchContainer, SearchInput } from './SearchbarStyles';


interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
