import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const font = Ubuntu_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teng Thaisothyrak's Portfolio",
  description: "Teng Thaisothyrak's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} dark:mocha latte bg-base text-text`}>
        {children}
      </body>
    </html>
  );
}
