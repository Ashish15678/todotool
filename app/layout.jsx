import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "todotool",
  description: "Generated by create next app",
};




export default function RootLayout({ children }) {
  return (
        <>
        <html>
          <body>
           {children}
          </body>
        </html>
        </>
  );
}
