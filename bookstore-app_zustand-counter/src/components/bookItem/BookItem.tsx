import './bookItem.css';
import { useState } from 'react';
import Book from '../../models/Book';
import useCartStore from '../../store/cart-store';

type Props = {
  book : Book
}

function BookItem({ book}  : Props) {
  const [bookBalance, setBookBalance] = useState<number>(0);
  const { increment, decrement } = useCartStore(state => ({
    increment : state.increment,
    decrement : state.decrement
  }));


  const decreaseBookBalance = () => { 
    if(bookBalance > 0) {
      setBookBalance(b => b - 1); 
      decrement();
    }
  }

  const increaseBookBalance = () => { 
    setBookBalance(b => b + 1);
    increment();
  }

  return (
    <article className="book">
      <h2 className="book-title">{ book.title }</h2>
      <p className="book-author">{ book.author }</p>
      <p className="book-desc">{ book.about }</p>
      <div className="book-counter">
        <button onClick={ decreaseBookBalance }>-</button>
        <p>{ bookBalance }</p>
        <button onClick={ increaseBookBalance }>+</button>
      </div>
    </article>
  )
}

export default BookItem;
