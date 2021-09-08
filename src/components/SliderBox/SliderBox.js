import React from "react";
import "./style.css";

function SliderBox({ image, addToCart }) {
  return (
    <div key={image.id} className="box">
      <img className="image" src={image.thumbnailUrl} alt={image.title} />
      <p className="text">{image.title.slice(0, 18)}</p>
      <button onClick={() => addToCart(image)} className="addToCart">
        <span>Sepete Ekle</span>
      </button>
    </div>
  );
}

export default SliderBox;
