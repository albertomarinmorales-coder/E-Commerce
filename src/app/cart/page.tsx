'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  
  const shipping = items.length > 0 ? 3.95 : 0;
  const total = getTotalPrice() + shipping;

  // Si el carrito está vacío, mostrar mensaje
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-teal-600 border-b border-teal-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white font-poppins mb-2">
              Mi Cesta
            </h1>
            <p className="text-lg text-teal-100">
              Tu cesta está vacía
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tu cesta está vacía</h2>
          <p className="text-gray-600 mb-8">Parece que aún no has añadido productos a tu cesta</p>
          <Link 
            href="/categorias"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Empezar a comprar
          </Link>
        </div>
      </div>
    );
  }

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
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>

      {/* Cart header */}
      <div className="bg-gradient-to-right from-teal-500 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-2xl mr-6">
                <span className="text-4xl">🛒</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold font-poppins mb-2">
                  Mi Cesta
                </h1>
                <p className="text-teal-100 text-lg">
                  {items.length} productos seleccionados
                </p>
                <p className="text-teal-200 text-sm mt-1">
                  💳 Pago seguro • 🚚 Envío rápido • ↩️ Devoluciones fáciles
                </p>
              </div>
            </div>
            
            <button
              onClick={clearCart}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Vaciar cesta
            </button>
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
                {items.map((item) => (
                  <div key={item.product.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.product.category} • por {item.product.unit}
                        </p>
                        
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold text-teal-600">
                            €{item.product.price.toFixed(2)}
                          </span>
                          {item.product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              €{item.product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-4">
                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Item total */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            €{(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        
                        {/* Remove button */}
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Eliminar
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
                  <span className="font-medium">€{getTotalPrice().toFixed(2)}</span>
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