import styled from 'styled-components';

export interface MenuItemProps {
    active?: boolean;
    children: any;
  }

  
export const MenuItemContainer = styled.div<MenuItemProps>`
  color: ${(props) => (props.active ? '#01A76F' : '#677784')};
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8ecee;
  }
`;