import React from "react";
import "./style.css";
import {AiOutlineShoppingCart} from "react-icons/ai"

function Cart({ cart, setCart, num, setNum }) {
  const removeElement = (el, id) => {
    if (el.amount > 1) {
      setNum((el.amount -= 1));
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="cart-part">
      <div className="cart-header-line">
        <span className="cart-icon"><AiOutlineShoppingCart/></span>Cart{" "}
        <span className="cart-element-count">
          {cart.length ? cart.length : null}
        </span>
      </div>
      {cart.length
        ? cart.map((el, index) => (
            <div key={index} className="cart-element">
              <img
                className="small-image"
                src={el.thumbnailUrl}
                alt={el.title}
              />
              <div className="cart-element-name">
                {el.amount} x {el.title.slice(0, 20)}
              </div>
              <button
                onClick={() => removeElement(el, el.id)}
                className="remove-btn"
              >
                sil
              </button>
            </div>
          ))
        : "Sepette Ürün Bulunmamakta."}
    </div>
  );
}

export default Cart;
