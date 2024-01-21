import React, {useEffect, useState} from 'react';

import HomePage from '../../components/pages/HomePage'
import { useAppSelector, useAppDispatch } from '../../hook/useDispatch'
import { fetchProducts } from '../../store/actions/products/fetchProduct';


const HomeContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('coffin');
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: any) => state.products.products);
    const loading = useAppSelector((state: any) => state.products.loading);

    useEffect(() => {
        if(products.length === 0) {
           dispatch(fetchProducts(selectedCategory));
        }
      }, []);

      useEffect(() => {
         dispatch(fetchProducts(selectedCategory))
      }, [selectedCategory])

  return (
    <HomePage products={products} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
  )
}

export default HomeContainer