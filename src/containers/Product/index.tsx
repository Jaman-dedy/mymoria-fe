import React, {useEffect} from 'react';

import HomePage from '../../components/pages/HomePage'
import { useAppSelector, useAppDispatch } from '../../hook/useDispatch'
import { fetchProducts } from '../../store/actions/products/fetchProduct';


const HomeContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: any) => state.products.products);
    const loading = useAppSelector((state: any) => state.products.loading);

    useEffect(() => {
        dispatch(fetchProducts());
        console.log('here we go :>> ');
      }, [dispatch]);

      console.log('products :>> ', products);
  return (
    <HomePage/>
  )
}

export default HomeContainer