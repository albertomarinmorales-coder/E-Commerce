import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  // Get the first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to E-Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover amazing products at great prices
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Check out our most popular items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/products?category=electronics"
              className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors"
            >
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-gray-800">Electronics</h3>
            </Link>
            <Link
              href="/products?category=clothing"
              className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors"
            >
              <div className="text-4xl mb-2">👕</div>
              <h3 className="font-semibold text-gray-800">Clothing</h3>
            </Link>
            <Link
              href="/products?category=books"
              className="bg-yellow-50 p-6 rounded-lg text-center hover:bg-yellow-100 transition-colors"
            >
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold text-gray-800">Books</h3>
            </Link>
            <Link
              href="/products?category=home-garden"
              className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors"
            >
              <div className="text-4xl mb-2">🏡</div>
              <h3 className="font-semibold text-gray-800">Home & Garden</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
