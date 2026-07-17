import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, BOOK_NAME } from "@/lib/site";

// GA4 feeds the BRSG cross-portfolio performance report. No-op until
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set in Vercel.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Lead Buyer's Playbook | Buy & Convert Leads Profitably",
    template: `%s | ${BOOK_NAME}`,
  },
  description:
    "The enterprise guide to buying and converting purchased internet leads profitably — free online edition by Bill Rice.",
  authors: [{ name: "Bill Rice", url: "https://billrice.com" }],
  creator: "Bill Rice",
  publisher: "Bill Rice Strategy Group",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BOOK_NAME,
    title: "The Lead Buyer's Playbook | Buy & Convert Leads Profitably",
    description:
      "The enterprise guide to buying and converting purchased internet leads profitably — free online edition by Bill Rice.",
    url: SITE_URL,
    images: ["/book-cover.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@billrice",
    title: BOOK_NAME,
    description:
      "The enterprise guide to buying and converting purchased internet leads profitably.",
    images: ["/book-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
