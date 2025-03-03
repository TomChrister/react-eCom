import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
    persist(
        (set) => ({
            products: [],
            addToCart: (product) =>
                set((state) => ({
                    products: [...state.products, product],
                })),
            removeFromCart: (product) =>
                set((state) => ({
                    products: state.products.filter((value) => product !== value),
                })),
            removeAllProducts: () =>
                set({products: []}),
        }),
        { name: 'cart-storage' }
    )
);
