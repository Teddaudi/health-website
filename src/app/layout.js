import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'flowbite';

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "TODO HEALTHCARE",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
      <body className={roboto.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow mt-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
