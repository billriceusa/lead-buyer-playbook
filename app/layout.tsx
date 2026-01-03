import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Lead Buyer's Playbook",
  description: "The Enterprise Guide to Buying and Converting Leads Profitably",
  authors: [{ name: "Bill Rice", url: "https://billrice.com" }],
  creator: "Bill Rice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

