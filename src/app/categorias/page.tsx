import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function CategoriasPage() {
  const categorias = [
    {
      id: 'frutas-verduras',
      name: 'Frutas y Verduras',
      description: 'Productos frescos del campo',
      emoji: '🥬',
      href: '/frutas-verduras',
      color: 'bg-green-100',
      gradient: 'from-green-400 to-emerald-500',
      productCount: 156
    },
    {
      id: 'carnes-pescados',
      name: 'Carnes y Pescados',
      description: 'Proteínas frescas y de calidad',
      emoji: '🥩',
      href: '/carnes-pescados',
      color: 'bg-red-100',
      gradient: 'from-red-400 to-pink-500',
      productCount: 89
    },
    {
      id: 'lacteos',
      name: 'Lácteos',
      description: 'Leche, quesos y derivados',
      emoji: '🥛',
      href: '/lacteos',
      color: 'bg-blue-100',
      gradient: 'from-blue-400 to-indigo-500',
      productCount: 78
    },
    {
      id: 'panaderia',
      name: 'Panadería',
      description: 'Pan fresco y bollería',
      emoji: '🥖',
      href: '/panaderia',
      color: 'bg-yellow-100',
      gradient: 'from-yellow-400 to-orange-500',
      productCount: 45
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      description: 'Refrescos, agua y más',
      emoji: '🥤',
      href: '/bebidas',
      color: 'bg-purple-100',
      gradient: 'from-purple-400 to-violet-500',
      productCount: 92
    },
    {
      id: 'ofertas',
      name: 'Ofertas',
      description: 'Los mejores precios',
      emoji: '🏷️',
      href: '/ofertas',
      color: 'bg-orange-100',
      gradient: 'from-orange-400 to-red-500',
      productCount: 67
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Todas las Categorías
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Explora nuestra amplia selección de productos frescos y de calidad
            </p>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => {
            return (
              <Link
                key={categoria.id}
                href={categoria.href}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 overflow-hidden relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoria.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${categoria.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{categoria.emoji}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {categoria.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {categoria.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        {categoria.productCount} productos
                      </span>
                      <span className="text-teal-600 group-hover:text-teal-700 font-medium group-hover:translate-x-1 transition-all">
                        Ver productos →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Featured section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda para encontrar algo?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Usa nuestra barra de búsqueda o contacta con nuestro equipo de atención al cliente
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="/search"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Buscar productos
            </Link>
            <Link
              href="/contacto"
              className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}