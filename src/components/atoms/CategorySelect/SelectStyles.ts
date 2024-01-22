import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin: 20px 29px;
  position: relative;
  width: 200px;
  @media (max-width: 768px) {
    width: 100% !important;
    margin-left: 10px;
    margin-right: 20px;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  width: 100%;
  cursor: pointer;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Option = styled.option``;