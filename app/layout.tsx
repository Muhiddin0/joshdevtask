import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "./ui/header";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marico | Muhiddin",
  description: "Josh dev kanali uchun maxsus | @black_hole_225",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
