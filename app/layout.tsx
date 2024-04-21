import type { Metadata } from "next";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata: Metadata = {
  title: "Campussphere",
  description: "A unviersity ERP project ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
