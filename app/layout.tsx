import type { Metadata } from "next";
import { AOSInitializer } from "./aosInicializer";
import { Oxanium, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-raleway",
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "FastDelivery",
  description: "FastDelivery",
  icons: {
    icon: "/icono.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //
  //
  return (
    <html lang="en" className={`${raleway.variable} ${oxanium.variable}`}>
      <body>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
