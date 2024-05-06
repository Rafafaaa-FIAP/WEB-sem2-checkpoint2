import ProductCard from '../../components/Cards';
import './styles.scss'

function Produtos() {
  
  const products = [
    {
      id: 1,
      name: 'Guitarra',
      image: 'src/assets/images/guitarra1.jpg',
      price: 'Buy: $500',
    },

    {
      id: 2,
      name: 'Guitarra',
      image: 'src/assets/images/guitarra1.jpg',
      price: 'Buy: $500',
    },
    {
      id: 3,
      name: 'Guitarra',
      image: 'src/assets/images/guitarra1.jpg',
      price: 'Buy: $500',
    },

    {
      id: 4,
      name: 'Guitarra',
      image: 'src/assets/images/guitarra1.jpg',
      price: 'Buy: $500',
    },
    
  ];

  return (
    <div className="produtos">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

  
  export default Produtos
  