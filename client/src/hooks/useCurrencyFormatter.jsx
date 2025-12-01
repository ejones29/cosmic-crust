const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price) => intl.format(price);
export const useCurrencyFormatter = (price) => {
  return priceConverter(price);
};
