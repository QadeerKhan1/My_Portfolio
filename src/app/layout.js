import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdul Qadeer Protfolio",
  description: "Frontend Developer, React.JS / Next.JS Developer",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        {children}
      
      </body>
    </html>
    
  );
}
