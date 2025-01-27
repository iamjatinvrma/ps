import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useStore } from "../store/useStore";

// Featured products data
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Organic Turmeric Powder",
    description:
      "Premium quality organic turmeric powder with high curcumin content.",
    price: 5.99,
    category: "Spices",
    image: "/images/turmric.jpg",
    weight: "100g",
    inStock: true,
  },
  {
    id: "2",
    name: "Pure Desi Ghee",
    description: "Traditional clarified butter made from pure cow milk.",
    price: 650,
    category: "Dairy",
    image: "/images/ghee.jpg",
    weight: "500g",
    inStock: true,
  },
  {
    id: "3",
    name: "Organic Red Chilli Powder",
    description: "Premium quality organic red chili Powder.",
    price: 50,
    category: "Spices",
    image: "/images/red-chilli.webp",
    weight: "100g",
    inStock: true,
  },
  {
    id: "4",
    name: "Premium Basmati Rice",
    description: "Aged premium basmati rice with long grains.",
    price: 230,
    category: "Grains",
    image: "/images/rice-3506194_1920.jpg",
    weight: "1kg",
    inStock: true,
  },
  {
    id: "5",
    name: "Garam Masala",
    description: "Authentic blend of ground spices used in Indian cuisine.",
    price: 100,
    category: "Spices",
    image: "/images/garammassala.jpg",
    weight: "100g",
    inStock: true,
  },
  {
    id: "6",
    name: "Cold Pressed Coconut Oil",
    description: "Pure and natural cold-pressed coconut oil.",
    price: 200,
    category: "Oils",
    image: "/images/coconut-oil-6925841_1920.jpg",
    weight: "300ml",
    inStock: true,
  },
  {
    id: "7",
    name: "Organic Mustard Oil",
    description: "Pure and natural cold-pressed coconut oil.",
    price: 100,
    category: "Oils",
    image: "/images/mustardoil.jpg",
    weight: "500ml",
    inStock: true,
  },
  {
    id: "8",
    name: "Organic Butter",
    description: "Pure and natural cold-pressed coconut oil.",
    price: 500,
    category: "Oils",
    image: "/images/butter.jpg",
    weight: "500grm",
    inStock: true,
  },
  {
    id: "9",
    name: "Organic Lassi(Butter Milk)",
    description: "Pure and natural Lassi made with pure goodness.",
    price: 40,
    category: "Dairy",
    image: "/images/lassi.webp",
    weight: "1000ml",
    inStock: true,
  },
];

export const Home = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000"
            alt="Spices Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-white mb-6">
                Authentic Indian Flavors
              </h1>
              <p className="text-xl text-amber-100 mb-8">
                Discover our premium collection of authentic Indian spices,
                grains, and traditional products.
              </p>
              <Link
                to="/products"
                className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spices",
                image:
                  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
                description: "Premium quality Indian spices",
              },
              {
                title: "Dairy Products",
                image:
                  "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400",
                description: "Fresh dairy products including ghee and butter",
              },
              {
                title: "Grains & Pulses",
                image:
                  "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&q=80&w=400",
                description: "Organic grains and pulses",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-amber-800 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="text-amber-700 hover:text-amber-600 font-medium"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-4">
            Featured Products
          </h2>
          <p className="text-amber-800 text-center mb-12 max-w-2xl mx-auto">
            Discover our handpicked selection of premium Indian groceries,
            carefully curated for authentic taste and quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-2 rounded-full ${
                        isInWishlist(product.id)
                          ? "bg-red-50 text-red-500"
                          : "bg-white/90 text-amber-500 hover:bg-white"
                      } transition-colors`}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-amber-700 text-sm mb-2">
                    {product.weight}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-900">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-amber-100 text-amber-800 px-8 py-3 rounded-lg hover:bg-amber-200 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <div
        ref={parallaxRef}
        className="relative h-96 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Experience True Indian Flavors
            </h2>
            <p className="text-xl">Bringing authenticity to your kitchen</p>
          </div>
        </div>
      </div>
    </div>
  );
};
