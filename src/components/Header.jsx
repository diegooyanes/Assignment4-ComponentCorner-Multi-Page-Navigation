import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <a className="header__brand" href="#">
        {storeName}
      </a>

      <nav className="header__nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#about">Our Story</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="header__button"
        href="#cart"
        aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
      >
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          {/* Cart count display here*/}
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </a>
    </header>
  );
}

export default Header;
