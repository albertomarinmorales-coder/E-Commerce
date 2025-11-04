'use client';

import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="¿Qué necesitas hoy?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 text-gray-900"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hidden md:flex flex-col items-center text-gray-600 hover:text-teal-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cesta</span>
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="¿Qué necesitas hoy?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>

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
                  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
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