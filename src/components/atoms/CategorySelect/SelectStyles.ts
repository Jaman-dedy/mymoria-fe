import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin: 20px 29px;
  position: relative;
`;

export const StyledSelect = styled.select`
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

export const Option = styled.option``;