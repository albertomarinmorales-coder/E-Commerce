import Link from 'next/link';
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CartPage() {
  // Productos mock en el carrito
  const cartItems = [
    {
      id: 1,
      name: 'Manzanas Rojas',
      price: 2.45,
      quantity: 2,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      category: 'Frutas y Verduras'
    },
    {
      id: 2,
      name: 'Salmón Fresco',
      price: 12.90,
      quantity: 1,
      unit: 'kg',
      image: '/images/productos-frescos.svg',
      category: 'Carnes y Pescados',
      isOffer: true,
      originalPrice: 15.90
    },
    {
      id: 3,
      name: 'Leche Entera',
      price: 1.25,
      quantity: 3,
      unit: 'litro',
      image: '/images/productos-frescos.svg',
      category: 'Lácteos'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 3.95;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>

      {/* Cart header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-2xl mr-6">
              <span className="text-4xl">🛒</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins mb-2">
                Mi Cesta
              </h1>
              <p className="text-teal-100 text-lg">
                {cartItems.length} productos seleccionados
              </p>
              <p className="text-teal-200 text-sm mt-1">
                💳 Pago seguro • 🚚 Envío rápido • ↩️ Devoluciones fáciles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Productos en tu cesta
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.category} • por {item.unit}
                        </p>
                        
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold text-teal-600">
                            €{item.price.toFixed(2)}
                          </span>
                          {item.isOffer && item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              €{item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-4">
                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-50">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-50">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Item total */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        
                        {/* Remove button */}
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Resumen del pedido
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Gastos de envío</span>
                  <span className="font-medium">€{shipping.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-teal-600">
                      €{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link
                  href="/checkout"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                >
                  Finalizar compra
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <Link
                  href="/categorias"
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium text-center transition-colors block"
                >
                  Seguir comprando
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🚚 Envío gratis en pedidos superiores a €50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}