/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import { toast } from 'react-toastify';

import WishlistPage from "../../components/pages/WishListPage"
import { useAppSelector, useAppDispatch } from '../../hook/useDispatch'
import { fetchWishlist } from '../../store/actions/wishlist/fetchWishList';
import { clearRemoveWishList } from '../../store/actions/wishlist/removeWishList';


const WishListContainer = () => {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector((state: any) => state.wishLists.wishlist);
    const removeToWishList = useAppSelector((state: any) => state.removeToWishList);

    console.log('removeToWishList :>> ', removeToWishList);

    useEffect(() => {
        if(wishlist.length === 0) {
        dispatch(fetchWishlist())
        }
        dispatch(clearRemoveWishList())
      }, []);

      useEffect(() => {
        if(removeToWishList.success){
          toast.success(removeToWishList?.data?.message);
          dispatch(fetchWishlist())
          dispatch(clearRemoveWishList())
        }
      }, [removeToWishList.success])

    return (
        <WishlistPage wishlist={wishlist}/>
    )
}

export default WishListContainer