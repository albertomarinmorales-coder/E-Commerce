import Link from 'next/link';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';

export default function CarnesPescadosPage() {
  const productos = [
    {
      id: 1,
      name: 'Pechuga de Pollo',
      price: 5.95,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 25,
      isOffer: false
    },
    {
      id: 2,
      name: 'Salmón Fresco',
      price: 12.90,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 15,
      isOffer: true,
      originalPrice: 15.90
    },
    {
      id: 3,
      name: 'Ternera Premium',
      price: 18.50,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 20,
      isOffer: false
    },
    {
      id: 4,
      name: 'Merluza Filetes',
      price: 8.75,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      stock: 18,
      isOffer: false
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

      <div className="bg-gradient-to-right from-red-50 to-pink-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center">
            <div className="bg-white shadow-lg p-6 rounded-2xl mr-6 border border-red-100">
              <span className="text-5xl">🥩</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-poppins mb-2">
                Carnes y Pescados
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Proteínas frescas de la mejor calidad
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                  {productos.length} productos disponibles
                </span>
                <span className="text-red-600">❄️ Refrigerado</span>
                <span className="text-red-600">🏆 Calidad Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {producto.isOffer && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OFERTA
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {producto.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-teal-600">
                      €{producto.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                      por {producto.unit}
                    </span>
                    {producto.isOffer && producto.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        €{producto.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${producto.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                    {producto.stock > 10 ? 'En stock' : `Quedan ${producto.stock}`}
                  </span>
                  
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}