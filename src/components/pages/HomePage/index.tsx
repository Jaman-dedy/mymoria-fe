import React from 'react';
import SearchBar from '../../atoms/SearchBar';
import CategorySelect from '../../atoms/CategorySelect'
import ProductCard from '../../molecules/Productcard';
import { HomePageContainer, ProductsContainer } from './HomeStyles';
import MainTemplate from '../../template/MainTemplate';

interface ProductProps {
  products: [],
  selectedCategory: string,
  setSelectedCategory: (arg: string) => void
}

const HomePage: React.FC<ProductProps> = ({products, selectedCategory, setSelectedCategory}) => {
  const categories = ['urn', 'flower', 'coffin'];
  return (
    <MainTemplate>
      <HomePageContainer>
      <CategorySelect categories={categories} onChange={setSelectedCategory} />
      <SearchBar />
      </HomePageContainer>
        <ProductsContainer>
          {products && products?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
    </MainTemplate>
  );
};

export default HomePage;
