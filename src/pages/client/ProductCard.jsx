import React from "react";

const ProductCard = ({ product }) => {
  if (!product) {
    return <div className="card h-100">Loading...</div>;
  }
  return (
    <div className="card h-100">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text text-danger fw-bold">
          {product.price.toLocaleString()}đ
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
