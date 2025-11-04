import Link from 'next/link';

export default function PanaderiaPage() {
  const productos = [
    {
      id: 1,
      name: 'Pan de Molde',
      price: 1.85,
      unit: 'unidad',
      image: '/images/productos/Panaderia/elegir-pan-molde 1.jpg',
      stock: 30,
      isOffer: false
    },
    {
      id: 2,
      name: 'Croissants',
      price: 3.45,
      unit: 'pack 6 unidades',
      image: '/images/productos/Panaderia/croissant.jpg',
      stock: 20,
      isOffer: true,
      originalPrice: 3.95
    },
    {
      id: 3,
      name: 'Baguette Francesa',
      price: 1.25,
      unit: 'unidad',
      image: '/images/productos/Panaderia/197769273-baguette-long-french-bread-isolated-on-white.jpg',
      stock: 25,
      isOffer: false
    },
    {
      id: 4,
      name: 'Magdalenas',
      price: 2.75,
      unit: 'pack 8 unidades',
      image: '/images/productos/Panaderia/322-h.jpg',
      stock: 15,
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
                Volver a categorías
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-teal-600">
                Filtros
              </button>
              <div className="flex border border-gray-300 rounded-md">
                <button className="p-2 border-r border-gray-300 bg-teal-50 text-teal-600">
                  Cuadrícula
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-600">
                  Lista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-600 border-b border-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center">
            <div>
              <h1 className="text-4xl font-bold text-white font-poppins mb-2">
                Panadería
              </h1>
              <p className="text-lg text-teal-100 mb-2">
                Pan fresco y bollería artesanal
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full font-medium">
                  {productos.length} productos disponibles
                </span>
                <span className="text-teal-100">Recién horneado</span>
                <span className="text-teal-100">Artesanal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.02] transform-gpu">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {producto.isOffer && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                    OFERTA
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {producto.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors">
                      €{producto.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
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
                  <span className={`text-sm transition-colors ${producto.stock > 10 ? 'text-green-600 group-hover:text-green-700' : 'text-orange-600 group-hover:text-orange-700'}`}>
                    {producto.stock > 10 ? 'En stock' : `Quedan ${producto.stock}`}
                  </span>
                  
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
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