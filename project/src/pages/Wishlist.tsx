import React from 'react';
import { useStore } from '../store/useStore';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Your wishlist is empty</h2>
        <p className="text-amber-800 mb-8">Save items you like to your wishlist for later.</p>
        <Link
          to="/products"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-8">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
              <p className="text-amber-700 text-sm mb-2">{item.weight}</p>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-900">${item.price}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};