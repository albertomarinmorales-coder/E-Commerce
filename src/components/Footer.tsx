'use client';

import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-teal-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Nombre y descripción de la página */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">FreshMarket</h3>
            <p className="text-teal-100 mb-4 leading-relaxed">
              Tu supermercado online de confianza. Productos frescos 
              y de calidad directamente a tu hogar.
            </p>
            <p className="text-teal-200 text-sm">
              Compra fácil, entrega rápida, calidad garantizada.
            </p>
          </div>

          {/* Navegación rápida */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-200">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/frutas-verduras" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Frutas y Verduras
                </Link>
              </li>
              <li>
                <Link href="/carnes-pescados" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Carnes y Pescados
                </Link>
              </li>
              <li>
                <Link href="/bebidas" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Bebidas
                </Link>
              </li>
              <li>
                <Link href="/lacteos" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Lácteos
                </Link>
              </li>
              <li>
                <Link href="/panaderia" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Panadería
                </Link>
              </li>
            </ul>
          </div>

          {/* Información útil */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-200">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Métodos de pago
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Zonas de reparto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-200">Contacto</h4>
            <div className="space-y-3 mb-6">
              <p className="text-teal-100">
                <span className="font-medium">Email:</span><br />
                info@freshmarket.es
              </p>
              <p className="text-teal-100">
                <span className="font-medium">Teléfono:</span><br />
                958 123 456
              </p>
              <p className="text-teal-100">
                <span className="font-medium">Ubicación:</span><br />
                Granada, España
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-teal-200 mb-3">Síguenos</h5>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="bg-teal-700 hover:bg-black hover:scale-110 w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center text-white"
                  title="X (Twitter)"
                >
                  <FaTwitter className="text-lg" />
                </Link>
                <Link 
                  href="#"
                  className="bg-teal-700 hover:bg-blue-600 hover:scale-110 w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center text-white"
                  title="Facebook"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
                <Link 
                  href="#"
                  className="bg-teal-700 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:scale-110 w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center text-white"
                  title="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ventajas del servicio */}
        <div className="border-t border-teal-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h5 className="font-bold text-teal-200 mb-2">Envío Gratis</h5>
              <p className="text-teal-100 text-sm">En pedidos superiores a 50€</p>
            </div>
            <div className="text-center">
              <h5 className="font-bold text-teal-200 mb-2">Productos Frescos</h5>
              <p className="text-teal-100 text-sm">Seleccionados diariamente</p>
            </div>
            <div className="text-center">
              <h5 className="font-bold text-teal-200 mb-2">Satisfacción Garantizada</h5>
              <p className="text-teal-100 text-sm">Devolución fácil y rápida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y enlaces legales */}
      <div className="bg-teal-900 py-6 border-t border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-teal-200 text-sm">
                © 2025 FreshMarket • Proyecto Demo para Portfolio • Desarrollado con Next.js
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-teal-200 hover:text-white hover:underline transition-all duration-200">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-teal-200 hover:text-white hover:underline transition-all duration-200">
                Política de Cookies
              </Link>
              <Link href="#" className="text-teal-200 hover:text-white hover:underline transition-all duration-200">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}