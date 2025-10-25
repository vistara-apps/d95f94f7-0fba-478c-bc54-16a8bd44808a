import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "AI Companion & Co-creation",
  description: "Your personalized AI co-pilot for collaborative content on Farcaster and Base",
  openGraph: {
    title: "AI Companion & Co-creation",
    description: "Your personalized AI co-pilot for collaborative content on Farcaster and Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
