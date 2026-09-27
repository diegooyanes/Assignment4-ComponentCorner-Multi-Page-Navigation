import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { useState } from "react";
import CartItem from "./components/CartItem";

function App() {
  const products = [
    {
      id: 1,
      name: "Imperial Leather Mate",
      price: 64.99,
      image: "/products/mate.jpg",
      description:
        "A handcrafted calabash mate wrapped in premium leather for a timeless ritual.",
    },
    {
      id: 2,
      name: "Organic Yerba Mate",
      price: 16.5,
      image: "/products/yerba.jpg",
      description:
        "Smooth organic yerba with balanced flavor and a naturally energizing finish.",
    },
    {
      id: 3,
      name: "Stainless Steel Bombilla",
      price: 22.99,
      image: "/products/bombilla.jpg",
      description:
        "A durable stainless steel bombilla with a removable filter for easy cleaning.",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((currentItems) => [
      ...currentItems,
      { ...product, cartId: crypto.randomUUID() },
    ]);
  }

  function removeFromCart(cartId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId)
    );
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="app">
      <Header storeName="Tomate un Mate" cartCount={cartItems.length} />

      <main>
        <Hero
          title="Make every sip a ritual"
          subtitle="Discover premium mate essentials selected for flavor, tradition, and everyday moments."
          ctaText="Explore the collection"
        />

        <section className="products-section" id="products">
          <div className="section-heading">
            <p>Our favorites</p>
            <h2>Build your perfect mate setup</h2>
            <span>
              Thoughtfully selected essentials for beginners and lifelong mate
              drinkers.
            </span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section" id="cart">
          <h2>Your cart</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.cartId}
                    item={item}
                    onRemoveFromCart={removeFromCart}
                  />
                ))}
              </ul>
              <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
            </>
          )}
        </section>

        <section className="about-section" id="about">
          <p>More than a drink</p>
          <h2>A ritual meant to be shared</h2>
          <span>
            Mate brings people together. Our mission is to make this tradition
            accessible through quality products, thoughtful design, and respect
            for its South American roots.
          </span>
        </section>
      </main>

      <Footer
        storeName="Tomate un Mate"
        email="hello@tomateunmate.com"
        year={2026}
      />
    </div>
  );
}

export default App;
