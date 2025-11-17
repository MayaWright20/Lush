export function formatPrice(price: string): string {
  const whole = price.includes(".");

  if (!whole) return price;

  const numericPrice = parseFloat(price);

  return numericPrice.toFixed(2);
}
