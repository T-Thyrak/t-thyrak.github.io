import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme_provider";
import View from "./view";

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
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <View font={font.className}>
          <div className="mt-8 mb-2">
            <Navbar />
          </div>
          {children}
          <Footer />
        </View>
      </ThemeProvider>
    </html>
  );
}
