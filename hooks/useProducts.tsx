import { useEffect } from "react";

import { StoreState, useStore } from "@/store/store";
import { Product } from "@/types";

export default function useProducts() {
  const products = useStore((state: StoreState) => state.products);
  const setProducts = useStore((state: StoreState) => state.setProducts);
  const categories = useStore((state: StoreState) => state.categories);
  const setCategories = useStore((state: StoreState) => state.setCategories);

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
    products,
    setProducts,
    categories,
  };
}
