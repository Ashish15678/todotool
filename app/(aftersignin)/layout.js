import { Inter } from "next/font/google";
import "./../globals.css";
import LEFTCOMP from "@/components/leftcomp";
import TOPCOMPONENT from "@/components/topcomponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "john doe",
  description: "Generated by create next app",
};




export default function RootLayout({ children }) {
  
  return (
    <>
        <TOPCOMPONENT/>
        <LEFTCOMP/>
        {children}
        
    </>
  );
}