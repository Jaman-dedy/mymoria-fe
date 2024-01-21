import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

interface ProductProps {
  products: [],
  selectedCategory: string,
  setSelectedCategory: (arg: string) => void
}

const HomePage: React.FC<ProductProps> = ({products, selectedCategory, setSelectedCategory}) => {
  const categories = ['coffin', 'flower', 'urn'];
  return (
    <div>
      <NavBar />
      <HomePageContainer>
      <CategorySelect categories={categories} onChange={setSelectedCategory} />
      <SearchBar />
      </HomePageContainer>
        <ProductsContainer>
          {products.map((product: any) => (
            <ProductCard product={product} />
          ))}
        </ProductsContainer>
      <Footer/>
    </div>
  );
};

export default HomePage;
