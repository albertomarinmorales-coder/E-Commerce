import Link from 'next/link';
import { ArrowLeft, Filter, Grid, List, Percent } from 'lucide-react';

export default function OfertasPage() {
  const ofertas = [
    {
      id: 1,
      name: 'Plátanos',
      price: 1.89,
      originalPrice: 2.20,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 30,
      discount: 14,
      category: 'Frutas y Verduras'
    },
    {
      id: 2,
      name: 'Salmón Fresco',
      price: 12.90,
      originalPrice: 15.90,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 15,
      discount: 19,
      category: 'Carnes y Pescados'
    },
    {
      id: 3,
      name: 'Yogur Natural',
      price: 2.45,
      originalPrice: 2.95,
      unit: 'pack 4 unidades',
      image: '/images/productos-frescos.svg',
      stock: 30,
      discount: 17,
      category: 'Lácteos'
    },
    {
      id: 4,
      name: 'Croissants',
      price: 3.45,
      originalPrice: 3.95,
      unit: 'pack 6 unidades',
      image: '/images/productos-frescos.svg',
      stock: 20,
      discount: 13,
      category: 'Panadería'
    },
    {
      id: 5,
      name: 'Coca Cola',
      price: 1.45,
      originalPrice: 1.65,
      unit: 'lata 330ml',
      image: '/images/productos-frescos.svg',
      stock: 35,
      discount: 12,
      category: 'Bebidas'
    },
    {
      id: 6,
      name: 'Naranjas',
      price: 1.95,
      originalPrice: 2.50,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 60,
      discount: 22,
      category: 'Frutas y Verduras'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/categorias"
                className="flex items-center text-gray-600 hover:text-teal-600"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver a categorías
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-teal-600">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </button>
              <div className="flex border border-gray-300 rounded-md">
                <button className="p-2 border-r border-gray-300 bg-teal-50 text-teal-600">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-600">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers header */}
      <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-3xl">
                <span className="text-6xl">🏷️</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold font-poppins mb-4">
              Ofertas Especiales
            </h1>
            <p className="text-2xl text-orange-100 max-w-3xl mx-auto mb-4">
              Los mejores descuentos en productos seleccionados
            </p>
            <p className="text-xl text-orange-200">
              💰 Ahorra hasta un 25% en productos frescos
            </p>
            <div className="mt-6 inline-flex items-center bg-white bg-opacity-20 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-white font-medium">⏰ Ofertas por tiempo limitado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Percent className="h-5 w-5 text-orange-500" />
              <span className="text-gray-700">Descuentos hasta 25%</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-orange-500 text-lg">🏷️</span>
              <span className="text-gray-700">{ofertas.length} ofertas activas</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-700">⏰ Ofertas limitadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ofertas.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{producto.discount}%
                </div>
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-700 text-xs px-2 py-1 rounded">
                  {producto.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {producto.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-red-600">
                        €{producto.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        €{producto.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      por {producto.unit}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Ahorras €{(producto.originalPrice - producto.price).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${producto.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                    {producto.stock > 10 ? 'En stock' : `¡Solo quedan ${producto.stock}!`}
                  </span>
                  
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:scale-105">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-teal-100 mb-6">
            Explora todas nuestras categorías o usa la búsqueda
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/categorias"
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver todas las categorías
            </Link>
            <Link
              href="/search"
              className="border border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Buscar productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}