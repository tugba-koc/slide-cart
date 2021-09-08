import React, { useEffect, useState } from "react";
import { services } from "../Utils/Utils";
import "./style.css";
import axios from "axios";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import SliderBox from "../SliderBox/SliderBox";
import Cart from "../Cart/Cart";

function Slider() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios(services.apiUrl).then((res) => setImages(res.data.slice(0, 50)));
  }, []);

  const decreaseIndex = () => {
    if (count > 0) {
      setCount(count - 5);
    }
  };

  const increaseIndex = () => {
    if (count < 45) {
      setCount(count + 5);
    }
  };

  const addToCart = (image) => {
    if (!cart.includes(image)) {
      setNum((image.amount = 1));
      setCart([...cart, image]);
    } else {
      if (!image.amount) {
        image.amount = 1;
      } else {
        setNum((image.amount += 1));
      }
    }
  };

  return (
    <div>
      <div className="slider-main">
        <button
          className={`${count === 0 ? "disabled" : "button"}`}
          onClick={decreaseIndex}
        >
          <BsFillCaretLeftFill />
        </button>
        {images.length ? (
          images
            .slice(count, count + 5)
            .map((image) => (
              <SliderBox addToCart={addToCart} image={image} key={image.id} />
            ))
        ) : (
          <div>Loading...</div>
        )}

        <button
          onClick={increaseIndex}
          className={`${count === 45 ? "disabled" : "button"}`}
        >
          <BsFillCaretRightFill />
        </button>
      </div>
      <div className="cart-main">
        <Cart setNum={setNum} num={num} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default Slider;
