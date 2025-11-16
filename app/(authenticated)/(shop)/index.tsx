import Shop from "@/components/products/shop";
import useProducts from "@/hooks/useProducts";

export default function Index() {
  const { products } = useProducts();

  return <Shop products={products} />;
}
