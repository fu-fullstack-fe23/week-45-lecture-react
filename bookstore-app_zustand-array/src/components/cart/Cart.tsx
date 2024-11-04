import './cart.css';
import useCartStore from '../../stores/cart-store.ts';
import { useState, useEffect } from 'react';

function Cart() {
  const [cartSize, setCartSize] = useState<number>(0);
  const cart = useCartStore(state => state.cart);

  useEffect(() => {
    let size : number = 0;
    cart.map(book => {
      size += book.qty;
    });
    setCartSize(size);
  }, [cart]);

  return (
    <div className="cart">
      <p className="cart-text">Cart: </p>
      <p className="cart-indicator">{ cartSize }</p>
    </div>
  )
}

export default Cart;
