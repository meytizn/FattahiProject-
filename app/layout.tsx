import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local" //font 
import Header from "./components/pages/Header";
import Providers from "@/redux/provider";


import variables from '../styles/variables.module.scss'


// fonnts 

const youngserifFont=localFont({
  src:'../public/fonts/YoungSerif-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
})



const vazirFont=localFont({
  src:'../public/fonts/Vazir.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
})




export const metadata: Metadata = {
  title: "Hossein Fattahi thesis",
  description: "HosseinFatahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vazirFont.className} ${variables.title}`}
      >
        <Providers>
        
        <Header/>
        {children}

        </Providers>
      </body>
    </html>
  );
}
