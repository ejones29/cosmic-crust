export default async function getPastOrders(order) {
  const response = await fetch(`../server/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
