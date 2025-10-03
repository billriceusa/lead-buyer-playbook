import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lead Buyer Playbook",
  description: "The Enterprise Guide to Buying and Converting Leads Profitably",
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

