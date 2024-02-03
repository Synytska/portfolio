import type { Metadata } from "next";

import { BaseLayout } from "@/src/ui/components/BaseLayout";

import '@/src/styles/index.css'


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
      <body>
        <BaseLayout>
          {children}
        </BaseLayout>

      </body>
    </html>
  );
}
