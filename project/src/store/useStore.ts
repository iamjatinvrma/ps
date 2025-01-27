import { create } from 'zustand';
import { CartItem, Product, WishlistItem } from '../types';

interface Store {
  cart: CartItem[];
  wishlist: WishlistItem[];
  user: { isAuthenticated: boolean; data: null | { name: string; email: string } };
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  setUser: (userData: { name: string; email: string } | null) => void;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  wishlist: [],
  user: { isAuthenticated: false, data: null },
  
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),

  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      if (exists) {
        return {
          wishlist: state.wishlist.filter((item) => item.id !== product.id),
        };
      }
      return { wishlist: [...state.wishlist, product] };
    }),

  setUser: (userData) =>
    set({
      user: {
        isAuthenticated: !!userData,
        data: userData,
      },
    }),
}));