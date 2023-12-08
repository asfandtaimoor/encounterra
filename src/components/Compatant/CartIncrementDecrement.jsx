import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "@/Icons/index";

function CartIncrementDecrement({ Title, Value }) {
  // State to keep track of the quantity value
  const [quantity, setQuantity] = useState(Value);

  // Function to handle incrementing the quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="d-flex gap-2 align-items-center">
      <p className="ts-fs-18 text-uppercase fw-medium mb-0">{Title}</p>
      <div className="d-flex gap-1 ts-increment-decrement px-2">
        <button className="btn border-0 p-0" onClick={handleDecrement}>
          <MinusCircle Width="18" Height="18" />
        </button>
        <input
          style={{ maxWidth: "60px" }}
          className="form-control text-center px-0 py-1 ts-fs-18 fw-medium "
          type="number"
          value={quantity}
          readOnly
        />
        <button className="btn border-0 p-0" onClick={handleIncrement}>
          <PlusCircle Width="18" Height="18" />
        </button>
      </div>
    </div>
  );
}

export default CartIncrementDecrement;
