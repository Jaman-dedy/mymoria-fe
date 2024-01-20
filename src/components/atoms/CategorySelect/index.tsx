import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin: 20px 29px;
  position: relative;
`;

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  @media (min-width: 768px) {
    width: auto;
  }
`;

const Option = styled.option``;

interface CategorySelectProps {
  categories: string[];
  onChange: (category: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onChange }) => {
  return (
    <SelectContainer>
      <StyledSelect onChange={(e) => onChange(e.target.value)}>
        <Option value="">All Categories</Option>
        {categories.map((category, index) => (
          <Option key={index} value={category}>
            {category}
          </Option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default CategorySelect;
