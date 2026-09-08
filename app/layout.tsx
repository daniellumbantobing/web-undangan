import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Wedding Of...",
  description: "You are invited to our wedding celebration.",
  openGraph: {
    title: "The Wedding Of...",
    description: "You are invited to our wedding celebration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${sans.variable} ${playfair.variable} antialiased bg-surface text-on-surface paper-texture min-h-screen selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        {children}
      </body>
    </html>
  );
}

