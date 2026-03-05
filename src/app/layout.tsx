import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "Priyadharshini | AI & Full Stack Developer",
  description: "Portfolio of Priyadharshini - AI, Machine Learning, and Full Stack Projects",
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/x-icon' }
    ],
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
</body>
    </html>
  );
}
