import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";

const AboutPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data.products || res.data);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="container my-5">
      {/* Giới thiệu công ty */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            At <strong>YourCompany</strong>, we provide high-quality products
            that meet your needs and exceed expectations.
          </p>
          <p>
            Since our founding, our mission has been to combine quality,
            innovation, and customer satisfaction to bring the best experience
            to you.
          </p>
          <ul>
            <li>Reliable and diverse product range</li>
            <li>Dedicated customer support</li>
            <li>Ethical business practices</li>
            <li>Commitment to continuous improvement</li>
          </ul>
          <p>
            Want to learn more? Feel free to <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>

      {/* Hiển thị sản phẩm nổi bật */}
      <div>
        <h2 className="mb-4">Featured Products</h2>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-danger">Error: {error}</p>}

        {!loading && !error && products.length === 0 && (
          <p>No products found.</p>
        )}

        <div className="row">
          {!loading &&
            !error &&
            products.slice(0, 6).map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.thumbnail || product.images?.[0]}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <span className="fw-bold text-primary fs-5">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
