// components/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006644;
  width: 30%
`;

const AnimatedImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const RightSide = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const LoginButton = styled.button`
  background-color: #01a76f;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006644;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;


const ForgotPasswordButton = styled.button`
  color: #006644;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem('authenticatedUser', JSON.stringify({ username, password }));
      navigate('/')
      setError('');
      console.log('Authentication successful');
    } else {
      setError('Invalid username or password');
      console.log('Authentication failed');
    }
  };


  return (
    <Container>
      <LeftSide>
        <AnimatedImage
          src="https://via.placeholder.com/300"
          alt="Animated Image"
        />
      </LeftSide>
      <RightSide>
        <Title>Sign in to Mymoria</Title>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ForgotPasswordButton>Forgot password?</ForgotPasswordButton>
          <LoginButton type="submit" >Login</LoginButton>
        </Form>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
