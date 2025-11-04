import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreshMarket - Tu supermercado online",
  description: "Compra productos frescos y de calidad desde casa. Frutas, verduras, carnes, lácteos y más con entrega a domicilio.",
  keywords: "supermercado online, compra online, productos frescos, entrega a domicilio, frutas, verduras, carnes, lácteos",
  authors: [{ name: "FreshMarket" }],
  creator: "FreshMarket",
  publisher: "FreshMarket",
  openGraph: {
    title: "FreshMarket - Tu supermercado online",
    description: "Compra productos frescos y de calidad desde casa",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-inter`}
      >
        <CartProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
