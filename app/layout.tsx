import type { Metadata } from "next";
import '@/src/styles/index.css'
import Header from "@/src/ui/header/header";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400"] });

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
      <body className={`${syne.className} p-4 text-[#191919]`}>
        <div className="border border-black px-6 md:px-8 lg:px-10">
          <div className="w-full max-w-7xl mx-auto my-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
