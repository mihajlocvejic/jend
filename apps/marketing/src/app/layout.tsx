import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jend",
  description: "Jend marketing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider satelliteAutoSync>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}