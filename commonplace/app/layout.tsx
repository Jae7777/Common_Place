import type { Metadata } from "next";
import { 
  Press_Start_2P, Syncopate, Roboto_Mono,
  Poppins, IBM_Plex_Mono, Nunito_Sans, IBM_Plex_Sans
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Common Place",
  description: "You're at the right spot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-vapordark-500 overflow-x-hidden`}>
        <Navbar/>
        <div className=''>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
