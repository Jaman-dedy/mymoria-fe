// components/atoms/Logo.tsx
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Logo: React.FC = () => {
  return <LogoContainer>Logo</LogoContainer>;
};

export default Logo;
