// Base de datos de todos los productos
export interface ProductData {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  stock: number;
  isOffer: boolean;
  originalPrice?: number;
  category: string;
  description: string;
  brand: string;
  tags: string[];
}

export const allProducts: ProductData[] = [
  // Frutas y Verduras
  {
    id: 'fv-1',
    name: 'Manzanas Rojas',
    price: 2.45,
    unit: 'kg',
    image: '/images/productos/Frutas y Verduras/manzanas.jpg',
    stock: 50,
    isOffer: false,
    category: 'Frutas y Verduras',
    description: 'Manzanas rojas frescas y crujientes',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'manzana', 'fruta']
  },
  {
    id: 'fv-2',
    name: 'Plátanos',
    price: 1.89,
    unit: 'kg',
    image: '/images/productos/Frutas y Verduras/platanos.jpg',
    stock: 30,
    isOffer: true,
    originalPrice: 2.20,
    category: 'Frutas y Verduras',
    description: 'Plátanos maduros y dulces',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'plátano', 'banana', 'fruta']
  },
  {
    id: 'fv-3',
    name: 'Tomates Cherry',
    price: 3.45,
    unit: 'bandeja',
    image: '/images/productos/Frutas y Verduras/tCherry.jpg',
    stock: 25,
    isOffer: false,
    category: 'Frutas y Verduras',
    description: 'Tomates cherry dulces y jugosos',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'tomate', 'cherry', 'verdura']
  },
  {
    id: 'fv-4',
    name: 'Lechuga Iceberg',
    price: 1.25,
    unit: 'unidad',
    image: '/images/productos/Frutas y Verduras/lechuga.jpg',
    stock: 40,
    isOffer: false,
    category: 'Frutas y Verduras',
    description: 'Lechuga iceberg fresca y crujiente',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'lechuga', 'verdura', 'ensalada']
  },
  {
    id: 'fv-5',
    name: 'Naranjas',
    price: 1.95,
    unit: 'kg',
    image: '/images/productos/Frutas y Verduras/naranjas.jpg',
    stock: 60,
    isOffer: true,
    originalPrice: 2.50,
    category: 'Frutas y Verduras',
    description: 'Naranjas jugosas ricas en vitamina C',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'naranja', 'fruta', 'cítrico']
  },
  {
    id: 'fv-6',
    name: 'Zanahorias',
    price: 1.15,
    unit: 'kg',
    image: '/images/productos/Frutas y Verduras/zanahorias.jpg',
    stock: 35,
    isOffer: false,
    category: 'Frutas y Verduras',
    description: 'Zanahorias frescas ricas en vitamina A',
    brand: 'FreshMarket',
    tags: ['fresco', 'natural', 'zanahoria', 'verdura']
  },

  // Carnes y Pescados
  {
    id: 'cp-1',
    name: 'Pechuga de Pollo',
    price: 5.95,
    unit: 'kg',
    image: '/images/productos/Carnes y Pescados/pechuga.jpg',
    stock: 25,
    isOffer: false,
    category: 'Carnes y Pescados',
    description: 'Pechuga de pollo fresca y tierna',
    brand: 'FreshMarket',
    tags: ['fresco', 'proteína', 'pollo', 'carne']
  },
  {
    id: 'cp-2',
    name: 'Salmón Fresco',
    price: 12.90,
    unit: 'kg',
    image: '/images/productos/Carnes y Pescados/salmon.jpg',
    stock: 15,
    isOffer: true,
    originalPrice: 15.90,
    category: 'Carnes y Pescados',
    description: 'Salmón fresco del Atlántico',
    brand: 'FreshMarket',
    tags: ['fresco', 'proteína', 'salmón', 'pescado', 'omega3']
  },
  {
    id: 'cp-3',
    name: 'Ternera Premium',
    price: 18.50,
    unit: 'kg',
    image: '/images/productos/Carnes y Pescados/ternera.jpg',
    stock: 20,
    isOffer: false,
    category: 'Carnes y Pescados',
    description: 'Ternera premium de primera calidad',
    brand: 'FreshMarket',
    tags: ['fresco', 'proteína', 'ternera', 'carne', 'premium']
  },
  {
    id: 'cp-4',
    name: 'Merluza Filetes',
    price: 8.75,
    unit: 'kg',
    image: '/images/productos/Carnes y Pescados/merluza.webp',
    stock: 18,
    isOffer: false,
    category: 'Carnes y Pescados',
    description: 'Filetes de merluza fresca',
    brand: 'FreshMarket',
    tags: ['fresco', 'proteína', 'merluza', 'pescado']
  },

  // Lácteos
  {
    id: 'lac-1',
    name: 'Leche Entera',
    price: 1.25,
    unit: 'litro',
    image: '/images/productos/Lacteos y quesos/leche.jpg',
    stock: 40,
    isOffer: false,
    category: 'Lácteos',
    description: 'Leche entera fresca pasteurizada',
    brand: 'FreshMarket',
    tags: ['lácteo', 'fresco', 'leche']
  },
  {
    id: 'lac-2',
    name: 'Yogur Natural',
    price: 2.45,
    unit: 'pack 4 unidades',
    image: '/images/productos/Lacteos y quesos/yogur.jpg',
    stock: 30,
    isOffer: true,
    originalPrice: 2.95,
    category: 'Lácteos',
    description: 'Yogur natural cremoso',
    brand: 'FreshMarket',
    tags: ['lácteo', 'fresco', 'yogur']
  },
  {
    id: 'lac-3',
    name: 'Queso Manchego',
    price: 8.90,
    unit: 'cuña 200g',
    image: '/images/productos/Lacteos y quesos/Manchego.jpg',
    stock: 15,
    isOffer: false,
    category: 'Lácteos',
    description: 'Queso manchego curado tradicional',
    brand: 'FreshMarket',
    tags: ['lácteo', 'queso', 'manchego']
  },
  {
    id: 'lac-4',
    name: 'Mantequilla',
    price: 2.15,
    unit: '250g',
    image: '/images/productos/Lacteos y quesos/mantequilla.webp',
    stock: 25,
    isOffer: false,
    category: 'Lácteos',
    description: 'Mantequilla cremosa sin sal',
    brand: 'FreshMarket',
    tags: ['lácteo', 'mantequilla']
  },

  // Panadería
  {
    id: 'pan-1',
    name: 'Pan de Molde',
    price: 1.85,
    unit: 'unidad',
    image: '/images/productos/Panaderia/elegir-pan-molde 1.jpg',
    stock: 30,
    isOffer: false,
    category: 'Panadería',
    description: 'Pan de molde artesanal',
    brand: 'FreshMarket',
    tags: ['pan', 'artesanal', 'molde']
  },
  {
    id: 'pan-2',
    name: 'Croissants',
    price: 3.45,
    unit: 'pack 6 unidades',
    image: '/images/productos/Panaderia/croissant.jpg',
    stock: 20,
    isOffer: true,
    originalPrice: 3.95,
    category: 'Panadería',
    description: 'Croissants mantequilla franceses',
    brand: 'FreshMarket',
    tags: ['pan', 'artesanal', 'croissant', 'francés']
  },
  {
    id: 'pan-3',
    name: 'Baguette Francesa',
    price: 1.25,
    unit: 'unidad',
    image: '/images/productos/Panaderia/197769273-baguette-long-french-bread-isolated-on-white.jpg',
    stock: 25,
    isOffer: false,
    category: 'Panadería',
    description: 'Baguette francesa tradicional',
    brand: 'FreshMarket',
    tags: ['pan', 'artesanal', 'baguette', 'francés']
  },
  {
    id: 'pan-4',
    name: 'Magdalenas',
    price: 2.75,
    unit: 'pack 8 unidades',
    image: '/images/productos/Panaderia/322-h.jpg',
    stock: 15,
    isOffer: false,
    category: 'Panadería',
    description: 'Magdalenas caseras esponjosas',
    brand: 'FreshMarket',
    tags: ['pan', 'dulce', 'magdalena']
  },

  // Bebidas
  {
    id: 'beb-1',
    name: 'Agua Mineral',
    price: 0.75,
    unit: 'botella 1.5L',
    image: '/images/productos/bebidas/45.jpg',
    stock: 50,
    isOffer: false,
    category: 'Bebidas',
    description: 'Agua mineral natural',
    brand: 'FreshMarket',
    tags: ['bebida', 'agua', 'mineral']
  },
  {
    id: 'beb-2',
    name: 'Coca Cola',
    price: 1.45,
    unit: 'lata 330ml',
    image: '/images/productos/bebidas/cocacola.webp',
    stock: 35,
    isOffer: true,
    originalPrice: 1.65,
    category: 'Bebidas',
    description: 'Coca Cola refrescante',
    brand: 'Coca Cola',
    tags: ['bebida', 'refresco', 'cola']
  },
  {
    id: 'beb-3',
    name: 'Zumo de Naranja',
    price: 2.25,
    unit: 'brick 1L',
    image: '/images/productos/bebidas/Naranja_zumo.jpg',
    stock: 28,
    isOffer: false,
    category: 'Bebidas',
    description: 'Zumo de naranja 100% natural',
    brand: 'FreshMarket',
    tags: ['bebida', 'zumo', 'naranja', 'natural']
  },
  {
    id: 'beb-4',
    name: 'Cerveza Sin Alcohol',
    price: 3.85,
    unit: 'pack 6 botellas',
    image: '/images/productos/bebidas/cerveza.jpg',
    stock: 22,
    isOffer: false,
    category: 'Bebidas',
    description: 'Cerveza sin alcohol refrescante',
    brand: 'FreshMarket',
    tags: ['bebida', 'cerveza', 'sin alcohol']
  }
];

// Función para buscar productos
export const searchProducts = (query: string): ProductData[] => {
  if (!query.trim()) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  
  return allProducts.filter(product => {
    // Buscar en nombre
    if (product.name.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Buscar en categoría
    if (product.category.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Buscar en tags
    if (product.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Buscar en descripción
    if (product.description.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    return false;
  });
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string): ProductData[] => {
  return allProducts.filter(product => product.category === category);
};

// Función para obtener productos en oferta
export const getOfferProducts = (): ProductData[] => {
  return allProducts.filter(product => product.isOffer);
};