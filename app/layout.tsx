import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const MerriweatherBold = localFont({
  src: "./fonts/MerriweatherBold.ttf",
  variable: "--font-MerriweatherBold",
  weight: "100 900",
});

const MerriweatherLight = localFont({
  src: "./fonts/MerriweatherLight.ttf",
  variable: "--font-MerriweatherLight",
  weight: "100 900",
});

const WorkSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-WorkSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MerriweatherBold.variable}  ${MerriweatherLight.variable} ${WorkSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
