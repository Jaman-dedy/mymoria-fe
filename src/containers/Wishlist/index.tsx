import {useEffect} from 'react';
import WishlistPage from "../../components/pages/WishListPage"
import { useAppSelector, useAppDispatch } from '../../hook/useDispatch'
import { fetchWishlist } from '../../store/actions/wishlist/fetchWishList';


const WishListContainer = () => {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector((state: any) => state.wishLists.wishlist);
    const loading = useAppSelector((state: any) => state.wishLists.loading);


    useEffect(() => {
        if(wishlist.length === 0) {
        //    dispatch(fetchProducts(selectedCategory));
        dispatch(fetchWishlist())
        }
      }, []);

      console.log('wishlist :>> ', wishlist);

    return (
        <WishlistPage wishlist={wishlist}/>
    )
}

export default WishListContainer