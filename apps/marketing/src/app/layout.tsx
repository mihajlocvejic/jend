import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jend",
  description: "Jend marketing site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider satelliteAutoSync>
      <html lang="en">
        <body className={dmSans.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}