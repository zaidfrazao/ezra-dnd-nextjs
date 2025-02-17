import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppBar } from "@/components/appbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Saga of Vizima Wiki",
  description: "DnD Campaign Manager",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <AppBar />
            <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
