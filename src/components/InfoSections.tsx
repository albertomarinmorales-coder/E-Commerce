'use client';

import Image from 'next/image';

export default function InfoSections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center hover:bg-teal-50 transition-colors duration-300 rounded-2xl p-12 -m-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Productos frescos seleccionados para ti
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En FreshMarket trabajamos directamente con productores locales para ofrecerte 
                la mejor calidad. Cada producto pasa por rigurosos controles de calidad 
                antes de llegar a tu mesa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Frutas y verduras de temporada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Carnes y pescados premium</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Productos lácteos del día</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/empleado.jpg"
                    alt="Cliente y empleado en sección de verduras del supermercado"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-poppins">
                      Atención personalizada
                    </h3>
                    <p className="text-white/90">
                      Nuestro equipo te ayuda a elegir lo mejor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center hover:bg-teal-50 transition-colors duration-300 rounded-2xl p-12 -m-12">
            <div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/repertidor.avif"
                    alt="Repartidor entregando caja de pedido en la puerta de casa"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-poppins">
                      Entrega segura
                    </h3>
                    <p className="text-white/90">
                      Directamente en la puerta de tu hogar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Recibe tu compra cuando más te convenga
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nuestro servicio de entrega está diseñado para adaptarse a tu horario. 
                Elige la franja horaria que mejor te convenga y nosotros nos encargamos 
                del resto.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Entrega en menos de 24 horas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Franjas horarias flexibles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Seguimiento en tiempo real</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}