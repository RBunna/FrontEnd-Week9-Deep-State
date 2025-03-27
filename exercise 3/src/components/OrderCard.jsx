import React from "react";

export default function OrderCard({orders, dcr, inc}) {

  return (
      <div className="order">
        <div>
          <h4>{orders.product}</h4>
          <small>$ {orders.price}</small>
        </div>

        <div className="order-quantity">
          <div className="order-button" onClick={dcr}>-</div>
          <h4>{orders.quantity}</h4>
          <div className="order-button" onClick={inc}>+</div>
        </div>
      </div>
  );
}
