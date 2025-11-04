'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-200">Cliente</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/supermercados" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Nuestras tiendas
                </Link>
              </li>
              <li>
                <Link href="/consejos" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Consejos de compra
                </Link>
              </li>
              <li>
                <Link href="/cuenta" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Mi cuenta
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Mis pedidos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-200">Trabajador</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/trabaja-con-nosotros" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="/portal-empleado" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Portal del empleado
                </Link>
              </li>
              <li>
                <Link href="/formacion" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Formación
                </Link>
              </li>
              <li>
                <Link href="/beneficios" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Beneficios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-200">Proveedor</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portal-proveedores" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Portal de proveedores
                </Link>
              </li>
              <li>
                <Link href="/ser-proveedor" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Ser proveedor
                </Link>
              </li>
              <li>
                <Link href="/facturacion" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Facturación
                </Link>
              </li>
              <li>
                <Link href="/calidad" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Política de calidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-200">Sociedad</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/actualidad" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Actualidad
                </Link>
              </li>
              <li>
                <Link href="/sala-prensa" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Sala de prensa
                </Link>
              </li>
              <li>
                <Link href="/conocenos" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Conócenos
                </Link>
              </li>
              <li>
                <Link href="/sostenibilidad" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="/responsabilidad-social" className="text-teal-100 hover:text-white transition-colors duration-200">
                  Responsabilidad social
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-200">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-100">958 123 123 - Atención al cliente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-100">info@freshmarket.es</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-100">Granada</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-200">Síguenos</h3>
              <div className="flex space-x-4">
                <Link 
                  href="https://facebook.com/freshmarket" 
                  className="bg-teal-700 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  Facebook
                </Link>
                <Link 
                  href="https://twitter.com/freshmarket"
                  className="bg-teal-700 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200"
                  aria-label="Twitter"
                >
                  Twitter
                </Link>
                <Link 
                  href="https://instagram.com/freshmarket"
                  className="bg-teal-700 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  Instagram
                </Link>
                <Link 
                  href="https://youtube.com/freshmarket"
                  className="bg-teal-700 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200"
                  aria-label="YouTube"
                >
                  YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-teal-200 text-sm">
                © 2025 FreshMarket S.A. A12345678. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/accesibilidad" className="text-teal-200 hover:text-white transition-colors duration-200">
                Accesibilidad
              </Link>
              <Link href="/privacidad" className="text-teal-200 hover:text-white transition-colors duration-200">
                Política de privacidad
              </Link>
              <Link href="/cookies" className="text-teal-200 hover:text-white transition-colors duration-200">
                Política de cookies
              </Link>
              <Link href="/terminos" className="text-teal-200 hover:text-white transition-colors duration-200">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}