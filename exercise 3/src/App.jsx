import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  function decrement(index) {
    setOrders(orders => orders.map((element, i) => {
      if (i === index) {
        return {
          ...element, quantity: (element.quantity === 0) ? 0 : element.quantity - 1
        }
      }
      return element;
    }));
  }

  function increment(index) {
    setOrders(orders => orders.map((element, i) => {
      if (i === index) {
        return {
          ...element, quantity: element.quantity + 1
        }
      }
      return element;
    }));
  }

  function totalPrice() {
    return orders.reduce((total, element) => {
      return total + (element.price * element.quantity);
    }, 0);
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((element, index) => (
          <OrderCard key={index} orders={element} dcr={() => decrement(index)} inc={() => increment(index)}></OrderCard>
        ))}
      </div>

      <CheckoutButton total={totalPrice()}></CheckoutButton>
    </>
  );
}
