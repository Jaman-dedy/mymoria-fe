// components/pages/LoginPage.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  width: 100vw; /* Use viewport width for full-width */
  height: 100vh; /* Use viewport height for full-height */
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

const GoogleSignInButton = styled.button`
  background-color: #4285f4;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ae8;
  }

  svg {
    margin-right: 10px;
  }
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
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

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  padding-right: 30px;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
`;

const ForgotPasswordButton = styled.button`
  color: #006644;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const SignupButton = styled.button`
  color: #006644;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
        <GoogleSignInButton>
          <FontAwesomeIcon icon={faGoogleBrand} />
          Sign in with Google
        </GoogleSignInButton>
        <Form>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
          <ForgotPasswordButton>Forgot password?</ForgotPasswordButton>
          <LoginButton type="submit">Login</LoginButton>
        </Form>
        {/* <SignupButton>Don't have an account? Sign up</SignupButton> */}
      </RightSide>
    </Container>
  );
};

export default LoginPage;
