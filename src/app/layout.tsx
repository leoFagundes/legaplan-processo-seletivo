import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["100", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Legaplan",
  description: "Legaplan - Teste Dev Júnior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={interTight.variable}>{children}</body>
    </html>
  );
}
