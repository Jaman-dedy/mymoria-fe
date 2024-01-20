import React, {useState} from 'react';
import styled from 'styled-components';
import NavBar from '../../organisms/Navbar';
import Footer from '../../organisms/Footer';
import SearchBar from '../../atoms/SearchBar';
import CategorySelect from '../../atoms/CategorySelect'
import ProductCard from '../../molecules/Productcard';

const HomePageContainer = styled.div`
  padding-left: 6px;
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Mock data for categories and products
  const categories = ['Electronics', 'Clothing', 'Books'];
  const products:any = [
    // ... your product data
  ];


  return (
    <div>
      <NavBar />
      <HomePageContainer>
      <CategorySelect categories={categories} onChange={setSelectedCategory} />
      <SearchBar />
      </HomePageContainer>
        <ProductsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Add more ProductCard components as needed */}
        </ProductsContainer>
      <Footer/>
    </div>
  );
};

export default HomePage;
