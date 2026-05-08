import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "../styles/globals.scss";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WorkSheet",
    template: "%s | WorkSheet",
  },
  description: "A responsive product marketing site for WorkSheet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body>{children}</body>
    </html>
  );
}
