import type Stripe from 'stripe';

export type PriceDisplayType = {
  className?: string;
  price?: Stripe.Price | null;
};

export type ProductImageType = {
  altText: string;
  imageClassName: string;
  imageSizes: string;
  imageUrl?: string;
  wrapperClassName: string;
};

export type ProductsListType = {
  products: Stripe.Product[];
};

export type ProductType = {
  product: Stripe.Product;
};

export type QuantitySelectorType = {
  className?: string;
  productName: string;
  productId: string;
  quantity: number;
};
