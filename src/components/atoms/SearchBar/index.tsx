// components/atoms/SearchBar.tsx
import React from 'react';
import { SearchContainer, SearchIcon, SearchInput } from './SearchbarStyles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;
