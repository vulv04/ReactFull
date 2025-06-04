import React, { useEffect, useState } from "react";           
import Banner from "../../components/Banner";
import ServiceFeatures from "../../components/ServiceFeatures";
import SearchBarWithTags from "../../components/SearchBarWithTags";
import FeaturedProducts from "./FeaturedProducts";
import RecommendedProducts from "./RecommendedProducts";
import SpecialCollections from "./SpecialCollections";
import { getProducts } from "../../api/productApi";

// Card sản phẩm
const ProductCard = ({ title, description, image, price }) => (
  <div className="card h-100 shadow-sm">
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
    </div>
  </div>
);

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async (data) => {
      try {
        setLoading(true);
        setError(null);
        const res = await getProducts();
        console.log(res);
        const data = res.data.products || res.data;
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentItems = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Banner />
      <ServiceFeatures />
      <SearchBarWithTags />
      <section className="container my-5">
        <h1 className="mb-4 text-center">Welcome to Our Store</h1>
        <p className="text-center lead mb-5">
          Discover our hand-picked selection of high-quality products just for
          you.
        </p>

        {loading && (
          <div className="text-center my-5">
            <div className="spinner-border" role="status" />
            <p>Loading products...</p>
          </div>
        )}

        {error && <p className="text-danger text-center">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="text-center">No products available.</p>
        )}

        <div className="row">
          {!loading &&
            !error &&
            currentItems.map(
              ({ id, title, description, thumbnail, price, images }) => (
                <div key={id} className="col-md-4 mb-4">
                  <ProductCard
                    title={title}
                    description={description}
                    image={thumbnail || images?.[0] || ""}
                    price={price}
                  />
                </div>
              )
            )}
        </div>

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <nav>
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link">Previous</span>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="page-link">{i + 1}</span>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link">Next</span>
              </li>
            </ul>
          </nav>
        )}
      </section>
      <FeaturedProducts />
      <RecommendedProducts />
      <SpecialCollections />
    </div>
  );
};

export default HomePage;
