interface Thumbnail {
  url: string;
  alt: string;
  __typename?: string;
}

interface ProductType {
  slug: string;
  hasVariants: boolean;
  __typename?: string;
}

interface Collection {
  name: "Conditioners";
  slug: "conditioners";
  __typename: "SaleorSimpleCollection";
}

export interface Product {
  category: string[];
  description: string;
  minPrice: string;
  maxPrice: string;
  currency: string;
  slug: string;
  id: string;
  objectID: string;
  name: string;
  isAvailableForPurchase: boolean;
  isAvailable: boolean;
  thumbnail: Thumbnail;
  productType: ProductType;
  collections: Collection[];
  __typename: string;
}
