import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honest Outfitters - Premier Hunting Adventures",
  description: "Your premier destination for guided hunting adventures, specializing in free-range big game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f5dc]`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Mobile Persistent Contact Button */}
        <div className="md:hidden fixed bottom-4 w-full px-4 flex justify-end z-50">
          <a 
            href="tel:+15128101310" 
            className="bg-white bg-opacity-80 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
            aria-label="Call Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
        
        <footer className="bg-[#2c1810] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image 
                  src="/assets/logo_white.png" 
                  alt="Honest Outfitters" 
                  width={150}
                  height={100}
                  className="mb-4"
                />
              </Link>
              
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <a href="mailto:honestoutfittersllc@gmail.com" className="underline hover:text-[#f5f5dc] transition-colors">
                  honestoutfittersllc@gmail.com
                </a>
                <span className="hidden md:inline">•</span>
                <a href="tel:+15128101310" className="underline hover:text-[#f5f5dc] transition-colors">
                  (512) 810-1310
                </a>
                <span className="hidden md:inline">•</span>
                <a 
                  href="https://www.facebook.com/people/Honest-Outfitters/61568215327573/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-[#166FE5] transition-colors flex items-center"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span className="ml-1">Facebook</span>
                </a>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p>© {new Date().getFullYear()} Honest Outfitters LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 