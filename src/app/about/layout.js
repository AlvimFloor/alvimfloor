import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
     title: "Alvim Floors - About us",
     description: "A little of our history and our mission to provide the best service in the installation and restoration of vinyl and wooden floors in the greater Orlando area.",
};

export default function AboutLayout({ children }) {
     return (
          <html lang="en">
               <body className={inter.className}>{children}</body>
          </html>
     );
}
