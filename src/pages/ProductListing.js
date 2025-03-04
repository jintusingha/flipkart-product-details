import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import FloatingCart from "../components/Cart/FloatingCart"; 
import "./ProductListing.css";

const allProducts = [
  { id: 1, name: "Smartphone", price: 12999, rating: 4.5, category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 45999, rating: 4.7, category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 1999, rating: 4.2, category: "Accessories", image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: 3499, rating: 4.3, category: "Accessories", image: "/images/smartwatch.jpg" },
  { id: 5, name: "Shoes", price: 1499, rating: 4.1, category: "Fashion", image: "/images/shoes.jpg" },
  { id: 6, name: "T-shirt", price: 799, rating: 4.0, category: "Fashion", image: "/images/tshirt.jpg" },
  { id: 7, name: "Jeans", price: 1299, rating: 4.3, category: "Fashion", image: "/images/jeans.jpg" },
  { id: 8, name: "Tablet", price: 20999, rating: 4.6, category: "Electronics", image: "/images/tablet.jpg" },
  { id: 9, name: "Wireless Mouse", price: 599, rating: 4.4, category: "Accessories", image: "/images/mouse.jpg" },
  { id: 10, name: "Keyboard", price: 1299, rating: 4.5, category: "Accessories", image: "/images/keyboard.jpg" },
  { id: 11, name: "Monitor", price: 8999, rating: 4.7, category: "Electronics", image: "/images/monitor.jpg" },
  { id: 12, name: "Backpack", price: 999, rating: 4.2, category: "Fashion", image: "/images/backpack.jpg" },
  { id: 13, name: "Sunglasses", price: 1499, rating: 4.1, category: "Fashion", image: "/images/sunglasses.jpg" },
  { id: 14, name: "Jacket", price: 2499, rating: 4.3, category: "Fashion", image: "/images/jacket.jpg" },
  { id: 15, name: "Gaming Chair", price: 7999, rating: 4.6, category: "Furniture", image: "/images/chair.jpg" },
  { id: 16, name: "Earbuds", price: 2999, rating: 4.4, category: "Accessories", image: "/images/earbuds.jpg" },
  { id: 17, name: "Power Bank", price: 1999, rating: 4.5, category: "Accessories", image: "/images/powerbank.jpg" },
  { id: 18, name: "Washing Machine", price: 14999, rating: 4.8, category: "Appliances", image: "/images/washingmachine.jpg" },
  { id: 19, name: "Refrigerator", price: 22999, rating: 4.7, category: "Appliances", image: "/images/refrigerator.jpg" },
  { id: 20, name: "Air Conditioner", price: 31999, rating: 4.6, category: "Appliances", image: "/images/ac.jpg" },
  { id: 21, name: "Microwave", price: 5999, rating: 4.4, category: "Appliances", image: "/images/microwave.jpg" },
  { id: 22, name: "Water Bottle", price: 499, rating: 4.3, category: "Accessories", image: "/images/waterbottle.jpg" },
  { id: 23, name: "Smart TV", price: 39999, rating: 4.8, category: "Electronics", image: "/images/smarttv.jpg" },
  { id: 24, name: "Perfume", price: 1199, rating: 4.1, category: "Fashion", image: "/images/perfume.jpg" },
  { id: 25, name: "Desk Lamp", price: 999, rating: 4.2, category: "Home Decor", image: "/images/lamps.jpg" },
  { id: 26, name: "Couch", price: 22999, rating: 4.6, category: "Furniture", image: "/images/couch.jpg" },
];

const ProductListing = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([...allProducts]);
  const [sortOption, setSortOption] = useState("");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...allProducts];

    if (value === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="product-listing">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h2>Products</h2>

      <div className="sorting">
        <label>Sort by:</label>
        <select value={sortOption} onChange={handleSort}>
          <option value="">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>

      <FloatingCart />
    </div>
  );
};

export default ProductListing;
