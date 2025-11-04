'use client';

import Link from 'next/link';

export default function Hero() {
    return (
            <section 
            className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: `url('/images/hero.png')`
        }}
    >
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        <div className="relative z-10 flex items-center justify-center md:justify-end min-h-[600px] px-8 lg:px-16">
        <div className="text-center md:text-left max-w-md lg:max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-justify font-poppins">
                Empieza tu compra
                <br />
                en FreshMarket
            </h1>
            <p className="text-lg text-white/90 mb-8">
                La misma calidad y frescura de siempre
            </p>
        
            <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
                <Link 
                    href="/categorias"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/50 hover:border-white"
                >
                    Empezar a comprar
                </Link>
            </div>
        </div>
    </div>
    </section>
    );
}