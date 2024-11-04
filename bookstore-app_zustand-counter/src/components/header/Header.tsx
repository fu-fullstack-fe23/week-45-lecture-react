import Cart from '../cart/Cart';
import './header.css';

function Header() {
  return (
    <header className="page-header">
      <div className="header content-wrapper">
        <i className="page-logo fa-solid fa-book-open"></i>
        <Cart /> {/* Använd cartSize här */}
      </div>
    </header>
  )
}

export default Header;
