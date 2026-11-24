import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "../style/formula.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://atsdraft.vercel.app";
const siteName = "ATSDraft";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ATSDraft | Free ATS-Friendly Resume & CV Builder",
    template: "%s | ATSDraft",
  },

  description:
    "Build, customize, and download a free ATS-friendly resume or CV in minutes with ATSDraft. Clean recruiter-approved templates with instant PDF export and zero paywalls.",

  applicationName: siteName,
  category: "Career & Productivity",

  verification: {
    google: "google4d297be11b314d97",
  },

  icons: {
    icon: "/logo/secondary.png",
    shortcut: "/logo/secondary.png",
    apple: "/logo/secondary.png",
  },

  keywords: [
    "ATSDraft",
    "ATS Resume Builder",
    "Free ATS Resume Builder",
    "ATS-Friendly Resume Builder",
    "ATS-Friendly CV Maker",
    "Free Resume Builder",
    "Online Resume Builder",
    "Free CV Builder",
    "Online CV Maker",
    "ATS Resume Template",
    "PDF Resume Builder",
    "No Paywall Resume Builder",
    "Professional Resume Maker",
    "Simple Resume Creator",
    "Job Application Resume",
  ],

  authors: [{ name: "Dev 404", url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "ATSDraft | Free ATS-Friendly Resume & CV Builder",
    description:
      "Create a clean, ATS-optimized resume or CV for free with ATSDraft. Customize your sections, preview in real time, and export as a PDF.",
    images: [
      {
        url: "/logo/secondary.png",
        width: 512,
        height: 512,
        alt: "ATSDraft - Free ATS-Friendly Resume & CV Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ATSDraft | Free ATS-Friendly Resume & CV Builder",
    description:
      "Build, customize, and download free ATS-friendly resumes and CVs as PDF with ATSDraft.",
    images: ["/logo/secondary.png"],
  },

  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteName,
  url: siteUrl,
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  description:
    "Free online ATS-friendly resume and CV builder with real-time preview and instant PDF download.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Person",
    name: "rtch cntlls",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}