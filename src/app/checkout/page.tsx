import Link from 'next/link';
import { ShoppingCart, ArrowLeft, ArrowRight, MapPin, Clock, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/cart"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al carrito
            </Link>
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-teal-600">Datos</span>
              </div>
              <div className="w-8 border-t border-gray-300"></div>
              <div className="flex items-center">
                <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="ml-2 text-sm text-gray-500">Pago</span>
              </div>
              <div className="w-8 border-t border-gray-300"></div>
              <div className="flex items-center">
                <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="ml-2 text-sm text-gray-500">Confirmación</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout header */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-2xl mr-6">
              <span className="text-4xl">🛍️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold font-poppins mb-2">
                Finalizar Compra
              </h1>
              <p className="text-teal-100 text-lg">
                Completa tus datos para recibir tu pedido
              </p>
              <p className="text-teal-200 text-sm mt-1">
                🔒 Proceso seguro y encriptado
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Delivery address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Dirección de entrega
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Calle, número, piso, puerta"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tu ciudad"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código postal *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="28001"
                    />
                  </div>
                </div>
              </div>
              
              {/* Delivery time */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Horario de entrega
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha preferida
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>Hoy (si pedimos antes de 14:00)</option>
                      <option>Mañana</option>
                      <option>Pasado mañana</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Franja horaria
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option>9:00 - 12:00 (Mañana)</option>
                      <option>12:00 - 15:00 (Mediodía)</option>
                      <option>15:00 - 18:00 (Tarde)</option>
                      <option>18:00 - 21:00 (Noche)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Instrucciones especiales para la entrega..."
                  ></textarea>
                </div>
              </div>
              
              {/* Payment method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-6 w-6 text-teal-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Método de pago
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="card"
                      name="payment"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                      💳 Tarjeta de crédito/débito
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      name="payment"
                      type="radio"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                      🟡 PayPal
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="cash"
                      name="payment"
                      type="radio"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-700">
                      💵 Efectivo en la entrega
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Resumen del pedido
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal (3 productos)</span>
                  <span className="font-medium">€16.60</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Gastos de envío</span>
                  <span className="font-medium">€3.95</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-teal-600">
                      €20.55
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/checkout/payment"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                >
                  Continuar al pago
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <p className="text-xs text-gray-500 text-center">
                  Al continuar, aceptas nuestros términos y condiciones
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Pago seguro y protegido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}