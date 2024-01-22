import React from 'react';
import NavBar from '../../organisms/Navbar';
import Footer from '../../organisms/Footer';
import SearchBar from '../../atoms/SearchBar';
import CategorySelect from '../../atoms/CategorySelect'
import ProductCard from '../../molecules/Productcard';
import { HomePageContainer, ProductsContainer } from './HomeStyles';

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
