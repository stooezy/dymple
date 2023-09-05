import { ThemeProvider } from "@/components/sites/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const fontSans = localFont({
  src: "./0xProto.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yoga Permana",
  description: "Yoga Permana's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
