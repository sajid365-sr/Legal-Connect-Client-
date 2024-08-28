import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Connect",
  description: "Find your personal lawyer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
