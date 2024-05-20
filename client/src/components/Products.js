import React from "react";
import "./Products.css";

function Products() {
  return (
    <section className="products">
      <h2>상품 추천</h2>
      <div className="product-list">
        <div className="product-item">
          <img src="/images/product1.jpg" alt="Product 1" />
          <h3>자이언트 TPU 퍼블매트</h3>
          <p>72,000</p>
        </div>
        <div className="product-item">
          <img src="/images/product2.jpg" alt="Product 2" />
          <h3>꿈비 하이가드 범퍼침대</h3>
          <p>349,000</p>
        </div>
        <div className="product-item">
          <img src="/images/product3.jpg" alt="Product 2" />
          <h3>꿈비 메모리폼 베개</h3>
          <p>29,900</p>
        </div>
        {/* Add more product items as needed */}
      </div>
    </section>
  );
}

export default Products;
