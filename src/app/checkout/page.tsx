'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliveryDate: '',
    deliveryTime: '',
    comments: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es obligatoria';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es obligatoria';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'El código postal es obligatorio';
    }
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'La fecha de entrega es obligatoria';
    }
    if (!formData.deliveryTime) {
      newErrors.deliveryTime = 'La franja horaria es obligatoria';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Redirigir a la página de pago
      window.location.href = getPaymentUrl();
    }
  };

  const getPaymentUrl = () => {
    return `/payment?method=${selectedPayment}`;
  };

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
              Volver al carrito
            </Link>
            
            <h1 className="text-2xl font-bold text-gray-900">
              Finalizar Compra
            </h1>
          </div>
        </div>
      </div>

      {/* Checkout header */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-4xl font-bold font-poppins mb-2">
                Finalizar Compra
              </h1>
              <p className="text-teal-100 text-lg">
                Completa tus datos para recibir tu pedido
              </p>
              <p className="text-teal-200 text-sm mt-1">
                Proceso seguro y encriptado
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Delivery address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
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
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+34 600 000 000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Calle, número, piso, puerta"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu ciudad"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código postal *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                        errors.postalCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="28001"
                    />
                    {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>
              
              {/* Delivery time */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Horario de entrega
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha preferida *
                    </label>
                    <select 
                      value={formData.deliveryDate}
                      onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black ${
                        errors.deliveryDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona una fecha</option>
                      <option value="today">Hoy (si pedimos antes de 14:00)</option>
                      <option value="tomorrow">Mañana</option>
                      <option value="dayAfter">Pasado mañana</option>
                    </select>
                    {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Franja horaria *
                    </label>
                    <select 
                      value={formData.deliveryTime}
                      onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black ${
                        errors.deliveryTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona una franja</option>
                      <option value="morning">9:00 - 12:00 (Mañana)</option>
                      <option value="midday">12:00 - 15:00 (Mediodía)</option>
                      <option value="afternoon">15:00 - 18:00 (Tarde)</option>
                      <option value="evening">18:00 - 21:00 (Noche)</option>
                    </select>
                    {errors.deliveryTime && <p className="text-red-500 text-sm mt-1">{errors.deliveryTime}</p>}
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600"
                    placeholder="Instrucciones especiales para la entrega..."
                  ></textarea>
                </div>
              </div>
              
              {/* Payment method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
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
                      value="card"
                      checked={selectedPayment === 'card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="card" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                      Tarjeta de crédito/débito
                      <FaCreditCard className="ml-2 text-lg text-gray-600" />
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      name="payment"
                      type="radio"
                      value="paypal"
                      checked={selectedPayment === 'paypal'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="paypal" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                      PayPal
                      <FaPaypal className="ml-2 text-lg text-blue-600" />
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="cash"
                      name="payment"
                      type="radio"
                      value="cash"
                      checked={selectedPayment === 'cash'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="cash" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                      Efectivo en la entrega
                      <FaMoneyBillWave className="ml-2 text-lg text-green-600" />
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
                  <span className="font-medium text-black">16.60€</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Gastos de envío</span>
                  <span className="font-medium text-black">3.95€</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-black">Total</span>
                    <span className="text-lg font-bold text-black">
                      20.55€
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                >
                  Continuar al pago
                </button>
                
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
        </form>
      </div>
    </div>
  );
}