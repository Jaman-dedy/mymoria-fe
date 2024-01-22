import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';

import HomePage from '../../components/pages/HomePage'
import { useAppSelector, useAppDispatch } from '../../hook/useDispatch'
import { fetchProducts } from '../../store/actions/products/fetchProduct';
import { fetchWishlist } from '../../store/actions/wishlist/fetchWishList';
import { clearAddWishList } from '../../store/actions/wishlist/addWishList';


const HomeContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('urn');
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: any) => state.products.products);
    const wishlist = useAppSelector((state: any) => state.wishLists.wishlist);
    const addToWishList = useAppSelector((state: any) => state.addToWishList);

    useEffect(() => {
        if(products.length === 0) {
           dispatch(fetchProducts(selectedCategory));
        }
        if(wishlist.length === 0) {
          dispatch(fetchWishlist())
          }
          dispatch(clearAddWishList())
      }, [dispatch]);

      useEffect(() => {
         dispatch(fetchProducts(selectedCategory))
      }, [selectedCategory])

      useEffect(() => {
        if(addToWishList.success){
          toast.success(addToWishList?.products?.message);
          dispatch(fetchWishlist())
          dispatch(clearAddWishList())
        }
      }, [addToWishList.success])

  return (
    <HomePage products={products} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
  )
}

export default HomeContainer