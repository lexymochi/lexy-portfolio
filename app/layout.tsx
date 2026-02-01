import { Fraunces, Quicksand } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"] 
});

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-quicksand",
  weight: ["400", "500", "700"] 
});

export const metadata: Metadata = {
  title: "Alexis Arcega", 
  icons: {
    icon: '/browser-logo.svg', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}