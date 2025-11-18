import { useEffect } from "react";

import { StoreState, useStore } from "@/store/store";
import { Product } from "@/types";

export default function useProducts() {
  const products = useStore((state: StoreState) => state.products);
  const setProducts = useStore((state: StoreState) => state.setProducts);
  const categories = useStore((state: StoreState) => state.categories);
  const setCategories = useStore((state: StoreState) => state.setCategories);
  const filteredProducts = useStore(
    (state: StoreState) => state.filteredProducts,
  );
  const setFilteredProducts = useStore(
    (state: StoreState) => state.setFilteredProducts,
  );
  const searchWord = useStore((state: StoreState) => state.searchWord);
  const setSearchWord = useStore((state: StoreState) => state.setSearchWord);

  useEffect(() => {
    const getCategories = () => {
      if (!products) {
        return;
      }
      const newCategories = new Set<string>();
      products.forEach((item: Product) => {
        item.category.forEach((category) => {
          newCategories.add(category);
        });
      });
      const categoryArray = Array.from(newCategories);
      setCategories(categoryArray);
    };
    getCategories();
  }, [products, setCategories]);

  return {
    products:
      filteredProducts && filteredProducts?.length > 0
        ? filteredProducts
        : products,
    setProducts,
    categories,
    setFilteredProducts,
    searchWord,
    setSearchWord,
  };
}
