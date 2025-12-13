interface OrderItem {
  pizzaTypeId: string;
  name: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  size: string;
}

interface PastOrderDetail {
  order_id: number;
  date: string;
  time: string;
  items: OrderItem[];
}

export default async function getPastOrder(orderId: string | number): Promise<PastOrderDetail> {
  const response = await fetch(`/api/past-order/${orderId}`);
  const data = await response.json();
  return data;
}
