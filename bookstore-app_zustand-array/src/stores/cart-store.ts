import { create } from 'zustand';
import BookType from '../models/Book.ts';

type CartStore = {
    cart : BookType[],
    addBooks : (books : BookType[]) => void,
    increaseQty : (title : string) => void,
    decreaseQty : (title : string) => void
}

const useCartStore = create<CartStore>((set) => ({
    cart : [],
    addBooks: (books) => {
        const booksWithQty = books.map(book => ({ ...book, qty: 0 }));
        set({ cart : booksWithQty });
    },
    increaseQty: (title) => {
        set(state => ({
            cart: state.cart.map(book => {
                if(book.title === title) {
                    return {...book, qty: book.qty + 1};
                }
                return book;
            })
        }))
    },
    decreaseQty: (title) => {
        set(state => ({
            cart: state.cart.map(book => {
                if(book.title === title) {
                    const newQty = Math.max(0, book.qty - 1);
                    return {...book, qty: newQty};
                }
                return book;
            })
        }))
    },
}));

export default useCartStore;