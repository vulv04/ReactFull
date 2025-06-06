import React from "react";
const ProductCard = ({ id, title, description, image, price, onAddToCart }) => (
  <div className="card h-100 shadow-sm" key={id}>
    <img
      src={image}
      className="card-img-top"
      alt={title}
      style={{ height: "180px", objectFit: "cover" }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text text-truncate">{description}</p>
      <div className="mt-auto fw-bold text-primary fs-5">${price}</div>
      <button onClick={onAddToCart} className="btn btn-primary mt-2">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
