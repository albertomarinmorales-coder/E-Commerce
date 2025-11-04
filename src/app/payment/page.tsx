'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCreditCard, FaPaypal, FaMoneyBillWave, FaLock, FaCheckCircle } from 'react-icons/fa';

function PaymentContent() {
  const searchParams = useSearchParams();
  const paymentMethod = searchParams.get('method') || 'card';
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validatePaymentForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'El número de tarjeta es obligatorio';
      }
      if (!formData.cardName.trim()) {
        newErrors.cardName = 'El nombre del titular es obligatorio';
      }
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = 'La fecha de expiración es obligatoria';
      }
      if (!formData.cvv.trim()) {
        newErrors.cvv = 'El CVV es obligatorio';
      }
    }
    
    if (paymentMethod === 'paypal' && !formData.email.trim()) {
      newErrors.email = 'El email es obligatorio para PayPal';
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

  const handlePayment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!validatePaymentForm()) {
      return;
    }
    
    setIsProcessing(true);
    // Simular proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 3000);
  };

  const getPaymentTitle = () => {
    switch (paymentMethod) {
      case 'paypal':
        return 'Pago con PayPal';
      case 'cash':
        return 'Pago en Efectivo';
      default:
        return 'Pago con Tarjeta';
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Pago Completado!
          </h1>
          <p className="text-gray-600 mb-6">
            Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en breve.
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors block"
            >
              Volver al inicio
            </Link>
            <Link
              href="/cart"
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-colors block"
            >
              Ver carrito
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold font-poppins">
              {getPaymentTitle()}
            </h1>
            <p className="text-teal-100">
              Proceso seguro y encriptado
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Payment form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              
              {/* Card Payment */}
              {paymentMethod === 'card' && (
                <form id="payment-form-card" onSubmit={handlePayment}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Datos de la tarjeta
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número de tarjeta *
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                          errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fecha de expiración *
                        </label>
                        <input
                          type="text"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                            errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="MM/AA"
                          maxLength={5}
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                            errors.cvv ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="123"
                          maxLength={3}
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre del titular *
                      </label>
                      <input
                        type="text"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black placeholder-gray-600 ${
                          errors.cardName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nombre como aparece en la tarjeta"
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>
                  </div>
                </form>
              )}

              {/* PayPal Payment */}
              {paymentMethod === 'paypal' && (
                <form id="payment-form-paypal" onSubmit={handlePayment}>
                  <div className="text-center">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-6">
                      <FaPaypal className="text-6xl text-blue-600 mx-auto mb-4" />
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Continuar con PayPal
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Confirma tu email para proceder con PayPal.
                      </p>
                      
                      <div className="max-w-md mx-auto mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email de PayPal *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div className="bg-white rounded-md p-4 border">
                        <p className="text-sm text-gray-500">
                          Al hacer clic en "Pagar con PayPal", aceptas los términos y condiciones de PayPal.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* Cash Payment */}
              {paymentMethod === 'cash' && (
                <form id="payment-form-cash" onSubmit={handlePayment}>
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-6">
                      <FaMoneyBillWave className="text-6xl text-green-600 mx-auto mb-4" />
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Pago en Efectivo
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Pagarás en efectivo cuando recibas tu pedido en la dirección indicada.
                      </p>
                      <div className="bg-white rounded-md p-4 border space-y-2">
                        <p className="text-sm font-medium text-gray-700">Importante:</p>
                        <p className="text-sm text-gray-600">
                          • Ten el importe exacto: 20.55€
                        </p>
                        <p className="text-sm text-gray-600">
                          • El repartidor no siempre lleva cambio
                        </p>
                        <p className="text-sm text-gray-600">
                          • Recibirás una confirmación por email
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* Security notice */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <FaLock className="text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Conexión segura SSL 256-bit
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Tus datos están protegidos y encriptados
                </p>
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
                  form={`payment-form-${paymentMethod}`}
                  disabled={isProcessing}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors ${
                    isProcessing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700'
                  } text-white`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Procesando...
                    </span>
                  ) : (
                    `Pagar 20.55€`
                  )}
                </button>
                
                <Link
                  href="/checkout"
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium text-center transition-colors block"
                >
                  Volver atrás
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Al completar el pago, aceptas nuestros términos y condiciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component para Suspense
function PaymentLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Cargando página de pago...</p>
      </div>
    </div>
  );
}

// Componente principal con Suspense boundary
export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentContent />
    </Suspense>
  );
}