// components/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ForgotPasswordButton, Input, Label, LeftSide, LoginButton, RightSide, Title, Form, MessageContainer, AnimatedVideo } from './LoginStyles';


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
        <AnimatedVideo
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dvx8vwgk6/video/upload/v1705896244/pexels-mario-wallner-12393546_animation_sdhcwk.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </AnimatedVideo>
      </LeftSide>
      <RightSide>
        <Title>Sign in to Mymoria</Title>
        <MessageContainer>
          username: admin, password: password123
        </MessageContainer>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              setError('')
            }}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError('')
            }}
          />
          {
            error && (
              <MessageContainer status="error">
                {error}
              </MessageContainer>
            )
          }

          <ForgotPasswordButton>Forgot password?</ForgotPasswordButton>
          <LoginButton type="submit" >Login</LoginButton>
        </Form>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
