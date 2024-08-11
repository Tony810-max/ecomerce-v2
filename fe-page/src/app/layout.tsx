"use client";
import React from "react";

import { Inter } from "next/font/google";
import "animate.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/context/cartContext";
import { ProductProivder } from "@/context/productContex";
import ProgressManager from "@/components/ProgressManager";
import { metadata } from "./metaData";
import { OrderProvider } from "@/context/orderContext";
import { CategoryProvider } from "@/context/categoryContext";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = React.useState(true);

  const pathname = usePathname();

  React.useEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
      </head>
      <body className={inter.className}>
        {isLoading ? (
          <>
            <ProgressManager onSetLoading={setIsLoading} />
          </>
        ) : (
          <>
            <ToastContainer />
            <div className="flex flex-col items-center">
              <ProductProivder>
                <CartProvider>
                  <OrderProvider>
                    <CategoryProvider>
                      <Header />
                      <span className="border-[1px] border-b-[##e3e3e3] w-full" />
                      {children}
                      <Footer />
                    </CategoryProvider>
                  </OrderProvider>
                </CartProvider>
              </ProductProivder>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
