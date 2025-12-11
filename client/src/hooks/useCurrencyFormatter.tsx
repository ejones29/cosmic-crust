const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price: number): string => intl.format(price);

export const useCurrencyFormatter = (price: number): string => {
  return priceConverter(price);
};
