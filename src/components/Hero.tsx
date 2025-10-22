'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
      }}
    >
      {/* Black overlay for mobile */}
      <div className="absolute inset-0 bg-black/60 md:bg-transparent"></div>
      
      <div className="relative z-10 flex items-center justify-center md:justify-end min-h-[600px] px-8 lg:px-16">
        <div className="bg-white/95 md:bg-white/80 backdrop-blur-md rounded-lg p-8 lg:p-12 max-w-md lg:max-w-lg">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tu compra online
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            La misma calidad y frescura de siempre
          </p>
          
          <div className="flex flex-col gap-3">
            <Link 
              href="/categorias"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors duration-200"
            >
              Empezar a comprar
            </Link>
            <Link 
              href="/ofertas"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-md text-center transition-colors duration-200"
            >
              Ver ofertas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}