import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Showcases the portfolio of web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
