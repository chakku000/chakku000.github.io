import type { Metadata } from "next";
import { BIZ_UDPGothic } from "next/font/google";
import "./globals.css";

const bizudpgothic = BIZ_UDPGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-bizudpgothic',
});

export const metadata: Metadata = {
  title: "chakku's profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bizudpgothic.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
