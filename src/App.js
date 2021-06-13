import { useEffect, useState } from 'react';
import { Products, Navbar }  from './components';
import {commerce} from './lib/Commerce';

function App() {

  const[products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fethProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fethCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  //añadir productos al carrito
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)

  }
  useEffect(() => {
    fethProducts();
    fethCart();
  }, []);

  console.log(products);
  console.log(cart);
  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
