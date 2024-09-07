import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShielD",
  description: "portfolio by shield",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6`} id="home">{children}</body>
    </html>
  );
}
