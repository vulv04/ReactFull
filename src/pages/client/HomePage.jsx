import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import Banner from "../../components/Banner";
import ServiceFeatures from "../../components/ServiceFeatures";
import SearchBarWithTags from "../../components/SearchBarWithTags";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Banner />
      <ServiceFeatures />
      <SearchBarWithTags />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">Bạn có thể thích</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-6 col-sm-4 col-md-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-end mt-4">
          <button className="btn btn-dark px-4">Xem thêm</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
