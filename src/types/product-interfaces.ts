import type Stripe from 'stripe';

export type ProductCardType = {
  cardClass?: string;
  cardContentClass?: string;
  cardHeaderClass?: string;
  cardTitleClass?: string;
  imageSizes: string;
  imageWrapperClass?: string;
  linkClass?: string;
  priceDisplayClass?: string;
  product: Stripe.Product;
  productImageClass?: string;
  showDescription?: boolean;
  showDetailsButton?: boolean;
};

export type PriceDisplayType = {
  className?: string;
  price?: Stripe.Price | null;
};

export type ProductImageType = {
  altText: string;
  imageClassName: string;
  imageSizes: string;
  imageUrl?: string | null;
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
