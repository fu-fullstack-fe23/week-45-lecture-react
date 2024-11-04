import './bookItem.css';
import { useState } from 'react';
import Book from '../../models/Book';
import useCartStore from '../../stores/cart-store.ts';

type Props = {
  book : Book
}

function BookItem({ book}  : Props) {
  const { decreaseQty, increaseQty } = useCartStore(state => ({
    decreaseQty : state.decreaseQty,
    increaseQty : state.increaseQty
  }));

  return (
    <article className="book">
      <h2 className="book-title">{ book.title }</h2>
      <p className="book-author">{ book.author }</p>
      <p className="book-desc">{ book.about }</p>
      <div className="book-counter">
        <button onClick={ () => decreaseQty(book.title) }>-</button>
        <p>{ book.qty }</p>
        <button onClick={ () => increaseQty(book.title) }>+</button>
      </div>
    </article>
  )
}

export default BookItem;
