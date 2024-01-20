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

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Mock data for categories and products
  const categories = ['Electronics', 'Clothing', 'Books'];
  const products:any = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 1' },
    { id: 4, name: 'Product 2' },
    { id: 5, name: 'Product 1' },
    { id: 6, name: 'Product 2' },
    { id: 7, name: 'Product 1' },
    { id: 8, name: 'Product 2' },
  ];


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
