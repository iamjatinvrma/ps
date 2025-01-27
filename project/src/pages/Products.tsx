import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organic Turmeric Powder',
    description: 'Premium quality organic turmeric powder with high curcumin content.',
    price: 5.99,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400',
    weight: '100g',
    inStock: true,
  },
  {
    id: '2',
    name: 'Pure Desi Ghee',
    description: 'Traditional clarified butter made from pure cow milk.',
    price: 15.99,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1631237513177-f1d48f82e2d4?auto=format&fit=crop&q=80&w=400',
    weight: '500g',
    inStock: true,
  },
  {
    id: '3',
    name: 'Organic Red Lentils',
    description: 'Premium quality organic red lentils.',
    price: 4.99,
    category: 'Pulses',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&q=80&w=400',
    weight: '500g',
    inStock: true,
  },
  // Add more products as needed
];

const CATEGORIES = ['All', 'Spices', 'Dairy', 'Pulses', 'Oils', 'Grains'];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-96 px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-amber-900">{product.name}</h3>
              <p className="text-amber-700 text-sm mb-2">{product.weight}</p>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-900">${product.price}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-2 rounded-full ${
                      isInWishlist(product.id)
                        ? 'bg-red-50 text-red-500'
                        : 'bg-amber-50 text-amber-500'
                    }`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
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