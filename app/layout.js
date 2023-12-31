import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mars Nunez | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
