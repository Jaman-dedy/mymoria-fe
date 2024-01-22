export interface Picture {
    id: string;
    url: string;
  }
  
  export interface TranslationProperties {
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
  
  export interface Translation {
    name: string;
    description: string;
    locale: string;
    shortname: string;
    properties: TranslationProperties;
  }
  
  export interface Product {
    pictures: Picture[];
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
    translations: Translation;
  }
  
  export interface WishlistItem {
    id: string;
  }
  
  export interface Wishlist {
    products: WishlistItem[];
  }

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
  
  export interface ProductProps {
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
  