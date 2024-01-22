import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToWishlist } from '../../../store/actions/wishlist/addWishList';
import { useAppDispatch } from '../../../hook/useDispatch'

const CardContainer = styled.div`
  width: 330px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 35px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: calc(50% - 40px);
    margin: 20px;
  }

  @media (max-width: 576px) {
    width: calc(100% - 40px);
    margin: 20px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const CardContent = styled.div`
  padding: 8px 16px 0px 16px;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const CardActions = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  transition: opacity 0.3s;
  padding-bottom: 8px;
  padding-right: 22px;
`;

const WishlistIconContainer = styled.div`
  display: flex;
  transition: opacity 0.3s;
`;
const WishlistText = styled.span`
  margin-right: 5px;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #ccc;
  transition: color 0.3s;
  ${WishlistIconContainer}:hover & {
    color: #e74c3c; 
  }
`;

interface TranslationsProperties {
  certificate_1: string;
  certificate_2: string;
  seo_claim: string;
  number: string;
  material: string;
  color: string;
  size: string;
  weight: string;
  amount: string;
}

interface Translations {
  name: string;
  description: string;
  locale: string;
  shortname: string;
  properties: TranslationsProperties;
}

interface ProductProps {
  pictures: Array<{
    id: string;
    url: string;
  }>;
  previous: string;
  oldId: number;
  rating: number;
  createdAt: number;
  funeralType: string[];
  updatedAt: number;
  category: string;
  funeralPlan: string[];
  price: number;
  id: string;
  translations?: Translations;
}

const ProductCard: React.FC<ProductProps | any> = ({product}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {pictures, translations} = product ?? {}

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, {
      state: product
    })
  };

  const handleAddToWishlist = (e:any) => {
    e.stopPropagation(); 
    dispatch(addToWishlist(product.id))
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardImage src={pictures[0].url} alt="Product" />
      <CardContent>
        <CardText>Description</CardText>
        <CardDescription>
          {translations.name}
        </CardDescription>
      </CardContent>
      <CardActions>
         <WishlistIconContainer>
            <WishlistText>10k</WishlistText>
            <HeartIcon onClick={handleAddToWishlist} icon={faHeart} />
          </WishlistIconContainer>
      </CardActions>
    </CardContainer>
  );
};

export default ProductCard;
