import "./ProductCard.css";

function ProductCard({ product, name, price, image, description, onAddToCart }) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={image}
        alt={name}
      />

      <div className="product-card__content">
        <h3 className="product-card__name">
          {name}
        </h3>

        <p className="product-card__description">
          {description}
        </p>

        <div className="product-card__footer">
          <span className="product-card__price">
            ${price.toFixed(2)}
          </span>

          <button className="product-card__button" type="button" onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;