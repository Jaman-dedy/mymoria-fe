import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const AnimatedImage = styled.img`
  height: auto;
`;

export const AnimatedVideo = styled.video`
  width: 100%;
  height: auto;
`;

export const RightSide = styled.div`
  width: 40%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftSide = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8E918F;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MessageContainer = styled.div`
padding: 20px;
background-color: #CAFDF5;
border-radius: 6px;
font-style: italic;
margin-bottom: 20px
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const LoginButton = styled.button`
  background-color: #212B36;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #212B48;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const ForgotPasswordButton = styled.button`
  color: #006644;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 15px;
`;

