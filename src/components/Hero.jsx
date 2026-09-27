import "./Hero.css";

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          Authentic South American tradition
        </p>

        <h1>{title}</h1>

        <p className="hero__subtitle">
          {subtitle}
        </p>

        <a className="hero__button" href="#products">
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default Hero;