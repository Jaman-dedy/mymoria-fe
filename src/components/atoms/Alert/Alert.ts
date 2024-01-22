import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const AlertContainer = styled.div<{ type: string }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-in-out, ${fadeOut} 0.5s ease-in-out 2s forwards;
  z-index: 1000;

  ${({ type }) => {
    switch (type) {
      case 'success':
        return `
          background-color: #5cb85c;
          border: 1px solid #4cae4c;
        `;
      case 'error':
        return `
          background-color: #d9534f;
          border: 1px solid #d43f3a;
        `;
      case 'info':
        return `
          background-color: #5bc0de;
          border: 1px solid #46b8da;
        `;
      default:
        return '';
    }
  }}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;
