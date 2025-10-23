import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function CategoriasPage() {
  const categorias = [
    {
      id: 'frutas-verduras',
      name: 'Frutas y Verduras',
      description: 'Productos frescos del campo, seleccionados diariamente',
      href: '/frutas-verduras',
      productCount: 156
    },
    {
      id: 'carnes-pescados',
      name: 'Carnes y Pescados',
      description: 'Proteínas frescas y de la mejor calidad',
      href: '/carnes-pescados',
      productCount: 89
    },
    {
      id: 'lacteos',
      name: 'Lácteos',
      description: 'Leche, quesos y derivados lácteos frescos',
      href: '/lacteos',
      productCount: 78
    },
    {
      id: 'panaderia',
      name: 'Panadería',
      description: 'Pan fresco y bollería artesanal recién horneada',
      href: '/panaderia',
      productCount: 45
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      description: 'Refrescos, zumos, agua y más bebidas',
      href: '/bebidas',
      productCount: 92
    },
    {
      id: 'ofertas',
      name: 'Ofertas',
      description: 'Los mejores precios y descuentos especiales',
      href: '/ofertas',
      productCount: 67
    }
  ];

  return (
    <div className="min-h-screen bg-teal-600">
      {/* Hero section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Todas las Categorías
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Explora nuestra amplia selección de productos frescos y de calidad
            </p>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="bg-white border-t-8 border-b-8 border-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => {
              return (
                <div key={categoria.id} className="h-full">
                  <Link
                    href={categoria.href}
                    className="group block h-full relative"
                  >
                    <div className="bg-white rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:relative group-hover:-translate-y-2 group-hover:z-10 p-8 border border-teal-100 overflow-hidden h-full flex flex-col">
                      {/* Subtle teal gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Clean header section */}
                        <div className="mb-6">
                          <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-4 group-hover:h-2 transition-all duration-300"></div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                            {categoria.name}
                          </h3>
                        </div>
                        
                        {/* Description with consistent height */}
                        <p className="text-gray-600 mb-6 leading-relaxed flex-1 min-h-[3rem]">
                          {categoria.description}
                        </p>
                        
                        {/* Footer section - always at bottom */}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm text-teal-600 bg-teal-50 px-4 py-2 rounded-full font-medium border border-teal-200">
                            {categoria.productCount} productos
                          </span>
                          <span className="text-teal-600 group-hover:text-teal-700 font-semibold group-hover:translate-x-1 transition-all flex items-center">
                            Explorar
                            <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured section */}
      <div className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Necesitas ayuda para encontrar algo?
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto">
              Usa nuestra barra de búsqueda o contacta con nuestro equipo de atención al cliente
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="/search"
              className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Buscar productos
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-xl font-medium transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}