import './Card-style.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <span>{product.price}</span>
    </div>
  );
}

export default ProductCard;