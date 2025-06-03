import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsSidebar from "../../components/NewsSidebar";
import NewsGrid from "../../components/NewsGrid";

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://vukibo.onrender.com/products")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Lỗi tải dữ liệu", err));
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-3">
          <NewsSidebar featured={articles} />
        </div>
        <div className="col-md-9">
          <h3 className="mb-4 fw-bold">Tin Tức Mới Nhất</h3>
          <NewsGrid articles={articles} />
        </div>
      </div>
    </div>
  );
}
