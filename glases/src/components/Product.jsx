import React from "react";

import { useDispatch } from "react-redux";
import { incrementBasket, decrementBasket, removeBasket } from "../redux/feature/basketClice";
function Product({ name, amount, price, image }) {
  // const {amount} = useSelector((stete) => stete.basket)
  const dicpatch = useDispatch()
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-14">
        <img src={image} alt={image + "glases"} className="w-40" />
        <div className="flex flex-col">
          <p className="font-medium">{name}</p>
          <p className="font-medium"> ${price}</p>
          <button onClick={() => dicpatch(removeBasket(name))} className="text-red-500 tracking-wider">Remove</button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dicpatch(decrementBasket(name))} >-</button>
        <p>{amount}</p>
        <button onClick={() => dicpatch(incrementBasket(name))}>+</button>
      </div>
    </div>
  );
}

export default Product;
