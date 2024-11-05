import useCartStore from '../../store/cart-store';
import './cart.css';

function Cart() {

  const cart = useCartStore(state => state.cart);

  return (
    <div className="cart">
      <p className="cart-text">Cart: </p>
      <p className="cart-indicator">{ cart }</p>
    </div>
  )
}

export default Cart;
