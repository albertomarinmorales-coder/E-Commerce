'use client';

import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { searchProducts, ProductData } from '@/data/products';
import { useDebounce } from '@/hooks/useDebounce';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ProductData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { getTotalItems } = useCart();
  const router = useRouter();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const searchRef = useRef<HTMLDivElement>(null);

  // Buscar sugerencias cuando cambie el query con debounce
  useEffect(() => {
    if (debouncedSearchQuery.trim().length >= 2) {
      const results = searchProducts(debouncedSearchQuery).slice(0, 5); // Máximo 5 sugerencias
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedSearchQuery]);

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
      // Cerrar menú móvil si está abierto
      if (isMobileMenuOpen) {
        closeMenu();
      }
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setSearchQuery(productName);
    setShowSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(productName)}`);
  };

  const handleSearchInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="text-xl md:text-2xl font-bold text-teal-600">
              FreshMarket
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8" ref={searchRef}>
            <div className="relative w-full">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="¿Qué necesitas hoy?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchInputKeyPress}
                  onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-teal-600 transition-colors"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>

              {/* Sugerencias */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50">
                  {suggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.name)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                      <p className="text-sm font-bold text-teal-600">{product.price}€</p>
                    </button>
                  ))}
                  {searchQuery.trim() && (
                    <button
                      onClick={() => handleSearch({ preventDefault: () => {} } as any)}
                      className="w-full px-4 py-3 text-left hover:bg-teal-50 border-t border-gray-200"
                    >
                      <div className="flex items-center space-x-2 text-teal-600">
                        <Search className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Ver todos los resultados para "{searchQuery}"
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hidden md:flex flex-col items-center text-gray-600 hover:text-teal-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cesta</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <button 
              className="md:hidden p-2 text-gray-600 hover:text-teal-600"
              onClick={() => isMobileMenuOpen ? closeMenu() : openMenu()}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-3">
            <Link href="/categorias" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Todas las categorías
            </Link>
            <Link href="/frutas-verduras" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Frutas y Verduras
            </Link>
            <Link href="/carnes-pescados" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Carnes y Pescados
            </Link>
            <Link href="/lacteos" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Lácteos
            </Link>
            <Link href="/panaderia" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Panadería
            </Link>
            <Link href="/bebidas" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Bebidas
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
            isAnimating 
              ? 'bg-black/20 backdrop-blur-sm' 
              : 'bg-black/0 backdrop-blur-none'
          }`} 
          onClick={closeMenu}
        >
          <div 
            className={`bg-white w-80 h-full shadow-lg transition-transform duration-300 ease-in-out ${
              isAnimating ? 'translate-x-0' : '-translate-x-full'
            }`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-teal-600">
                  FreshMarket
                </div>
                <button 
                  onClick={closeMenu}
                  className="p-2 text-gray-600 hover:text-teal-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <form onSubmit={handleSearch} className="relative w-full mb-6">
                <input
                  type="text"
                  placeholder="¿Qué necesitas hoy?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchInputKeyPress}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-teal-600 transition-colors"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>

              <Link 
                href="/account" 
                className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 py-2"
                onClick={closeMenu}
              >
                <User className="h-5 w-5" />
                <span>Mi cuenta</span>
              </Link>

              <Link 
                href="/cart" 
                className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 py-2 relative"
                onClick={closeMenu}
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
                <span>Mi cesta</span>
              </Link>
              
              <hr className="border-gray-200" />
              
              <div className="space-y-3">
                <Link 
                  href="/categorias" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Todas las categorías
                </Link>
                <Link 
                  href="/frutas-verduras" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Frutas y Verduras
                </Link>
                <Link 
                  href="/carnes-pescados" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Carnes y Pescados
                </Link>
                <Link 
                  href="/lacteos" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Lácteos
                </Link>
                <Link 
                  href="/panaderia" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Panadería
                </Link>
                <Link 
                  href="/bebidas" 
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  Bebidas
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}