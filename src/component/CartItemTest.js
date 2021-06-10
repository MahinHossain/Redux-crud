import React from "react";
import { useSelector } from "react-redux";

export default function CartItemTest() {
  const state = useSelector((state) => state.reducer.cartitem);
  console.log(`state test`, state);
  //now we can access data from anywhere by this formula
  return (
    <div className="">
      {state.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}
