import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Cart({ cartItem, removeFromCart }) {
  const car = useSelector((state) => state.reducer.cartitem);

  return (
    <div>
      {" "}
      <h2 className="text-success ">Your Cart</h2>
      <div className="row">
        {car.length == 0 && <h1> No item added</h1>}{" "}
        {car.map((item, index) => (
          <div class="card heightwidth">
            <img
              class="card-img-top imgheightwidth"
              src={item.image}
              alt="Card image cap"
            />

            <h5 class="card-title text heading">{item.title}</h5>

            <h6 className="card-title">{item.price}</h6>
            <a
              href="#"
              class="btn btn-outline-dark small"
              onClick={() => removeFromCart(item)}
            >
              Remove Item
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
