import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu"

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs")
  const data = await res.json()
  return {
    title: data.title,
    description: data.desciption,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
