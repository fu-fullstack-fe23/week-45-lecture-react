import './bookList.css';
import BookItem from '../bookItem/BookItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../../models/Book';

function BookList() {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/books.json')
      .then(response => {
        setBookList(response.data);
      })
  }, []);

  return (
    <section className="page-booklist">
      <div className="booklist content-wrapper">
        {
          bookList.map((book, index) => {
            return <BookItem key={ index } book={ book } />
          })
        }
      </div>
    </section>
  )
}

export default BookList
