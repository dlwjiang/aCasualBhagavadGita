import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Casual Bhagavad Gita",
  description: "A Casual Interpretation of the Bhagavad Gita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
