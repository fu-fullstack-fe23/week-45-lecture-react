import { create } from 'zustand';

interface CartStore {
    cart : number,
    increment : () => void,
    decrement : () => void
}

const useCartStore = create<CartStore>((set) => ({
    cart : 0,
    increment : () => set(state => ({ cart : state.cart + 1})),
    decrement : () => set(state => ({ cart : state.cart - 1})),
}));

export default useCartStore;