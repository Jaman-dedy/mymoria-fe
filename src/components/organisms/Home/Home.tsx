// /components/organisms/HomePage.tsx
import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import { HomePageContainer, ContentContainer } from './Home.styles';

interface HomePageProps {
  // Your HomePage properties
}

const HomePage: React.FC<HomePageProps> = ({ /* Your HomePage properties here */ }) => {
  return (
    <HomePageContainer>
      <Navbar />
      <ContentContainer>
        {/* Your homepage content goes here */}
        <h1>Welcome to the Home Page</h1>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
