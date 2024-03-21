import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
     title: "Alvim Floors - Catalog",
     description: "Search our catalog of vinyl and wooden floors in the greater Orlando area, and find the perfect floor for your home or business.",
};

export default function CatalogLayout({ children }) {
     return (
          <html lang="en">
               <body className={inter.className}>{children}</body>
          </html>
     );
}
