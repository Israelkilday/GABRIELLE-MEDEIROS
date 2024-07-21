import type { Metadata } from "next";
import { Marcellus, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
// components
import Header from "./_components/Header";
import CursorProvider from "./contexts/CursorContext";
import Transition from "./_components/Transition";
import PageTransition from "./_components/PageTransition";
import Footer from "./_components/Footer";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatVibes",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${greatVibes.variable} dark overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
