import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <footer className="bg-[#2c1810] text-white py-6 text-center">
          <p>© {new Date().getFullYear()} Honest Outfitters LLC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
} 