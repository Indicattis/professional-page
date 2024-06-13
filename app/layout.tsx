import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cativo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark font-figtree text-white`}>
        {children}</body>
    </html>
  );
}
