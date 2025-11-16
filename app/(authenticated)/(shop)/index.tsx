import Shop from "@/components/shop/shop";
import useProducts from "@/hooks/useProducts";

export default function Index() {
  const { products } = useProducts();

  return <Shop products={products} />;
}
