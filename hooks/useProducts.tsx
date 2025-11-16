import { StoreState, useStore } from "@/store/store";

export default function useProducts() {
  const products = useStore((state: StoreState) => state.products);
  const setProducts = useStore((state: StoreState) => state.setProducts);

  return {
    products,
    setProducts,
  };
}
