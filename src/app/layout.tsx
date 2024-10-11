"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux"; 
import { makeStore } from "./Redux/store";
import NextAuthProvider from "./providers/NextAuthProvider";

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

const store = makeStore();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <Provider store={store}>
            {children}
          </Provider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
