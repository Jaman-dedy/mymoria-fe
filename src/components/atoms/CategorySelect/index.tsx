import React from 'react';
import { SelectContainer, StyledSelect, Option } from './SelectStyles';


interface CategorySelectProps {
  categories: string[];
  onChange: (category: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onChange }) => {
  return (
    <SelectContainer>
      <StyledSelect onChange={(e) => onChange(e.target.value)}>
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
