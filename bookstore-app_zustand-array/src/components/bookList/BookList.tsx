import './bookList.css';
import BookItem from '../bookItem/BookItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../../models/Book';
import useCartStore from '../../stores/cart-store.js';

function BookList() {
  const { cart, addBooks } = useCartStore(state => ({
    cart : state.cart,
    addBooks : state.addBooks
  }));

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/books.json')
      .then(response => {
        addBooks(response.data);
      })
  }, []);

  return (
    <section className="page-booklist">
      <div className="booklist content-wrapper">
        {
          cart.map((book, index) => {
            return <BookItem key={ index } book={ book } />
          })
        }
      </div>
    </section>
  )
}

export default BookList
