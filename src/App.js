import { useEffect, useState } from 'react';
import { Products, Navbar, Cart, Checkout}  from './components';
import {commerce} from './lib/Commerce';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
  //actualizar productos del carrito
  const handleUpdateCartQty = async (productID, quantity) => {
    const { cart } = await commerce.cart.update(productID, { quantity });

    setCart(cart);
  }
  //remover productos del carrito
  const handleRemoveFromCart = async (productID) => {
    const { cart } = await commerce.cart.remove(productID);

    setCart(cart);
  }
  //remover toodos los productos del carrito
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fethProducts();
    fethCart();
  }, []);

  console.log(products);
  console.log(cart);

 

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
            <Cart 
              cart={cart}
              handleUpdateCartQty = {handleUpdateCartQty}
              handleRemoveFromCart = {handleRemoveFromCart}
              handleEmptyCart = {handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
