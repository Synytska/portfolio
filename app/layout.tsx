import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/src/styles/index.css'
import Header from "./ui/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <h1 className="text-3xl font-bold underline">Hello</h1>
        {children}
        </body>
    </html>
  );
}
