import type { Metadata } from "next";
import "./globals.css";
import { text } from "@/config/font";


export const metadata: Metadata = {
  title: "Escuela de atletismo Maktasu",
  description: "Escuela de atletismo en Jujuy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${text.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
