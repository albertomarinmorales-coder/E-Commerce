'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { searchProducts, ProductData } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    setIsLoading(true);
    const results = searchProducts(query);
    setSearchResults(results);
    setIsLoading(false);
  }, [query]);

  const convertToProduct = (producto: ProductData) => ({
    id: producto.id,
    name: producto.name,
    description: producto.description,
    price: producto.price,
    originalPrice: producto.originalPrice,
    image: producto.image,
    category: producto.category,
    brand: producto.brand,
    stock: producto.stock,
    unit: producto.unit,
    tags: producto.tags
  });

  const handleAddToCart = (producto: ProductData) => {
    addItem(convertToProduct(producto));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Buscando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Header */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Resultados de búsqueda
            </h1>
            <p className="text-xl text-teal-100">
              {query ? `Buscaste: "${query}"` : 'Búsqueda sin términos'}
            </p>
            <p className="text-teal-200 mt-2">
              {searchResults.length} {searchResults.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No encontramos productos
              </h3>
              <p className="text-gray-600 mb-6">
                No hemos encontrado productos que coincidan con tu búsqueda "{query}".
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Intenta con:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Palabras más generales (ej: "manzana" en lugar de "manzana roja")</li>
                  <li>Nombres de categorías (frutas, lácteos, pan, etc.)</li>
                  <li>Revisar la ortografía</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/categorias"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Ver todas las categorías
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((producto) => (
                <div 
                  key={producto.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={producto.image}
                      alt={producto.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {producto.isOffer && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        OFERTA
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs">
                      {producto.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {producto.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {producto.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {producto.isOffer && producto.originalPrice ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-red-600">
                              {producto.price}€
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              {producto.originalPrice}€
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">
                            {producto.price}€
                          </span>
                        )}
                        <p className="text-xs text-gray-500">por {producto.unit}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(producto)}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            <div className="mt-12 bg-teal-600 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Link
                  href="/frutas-verduras"
                  className="text-center p-3 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-white">Frutas y Verduras</span>
                </Link>
                <Link
                  href="/carnes-pescados"
                  className="text-center p-3 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-white">Carnes y Pescados</span>
                </Link>
                <Link
                  href="/lacteos"
                  className="text-center p-3 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-white">Lácteos</span>
                </Link>
                <Link
                  href="/panaderia"
                  className="text-center p-3 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-white">Panadería</span>
                </Link>
                <Link
                  href="/bebidas"
                  className="text-center p-3 bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-white">Bebidas</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}