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

const siteUrl = "https://LikhaPage.vercel.app";
const siteName = "LikhaPage";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "LikhaPage | Free ATS-Friendly Resume Builder",
    template: "%s | LikhaPage",
  },

  description:
    "Create a professional, ATS-friendly resume for free with LikhaPage. Build, customize, preview, and download your resume as a PDF to take the next step in your career.",

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
    "LikhaPage",
    "Resume Builder",
    "Free Resume Builder",
    "Online Resume Builder",
    "ATS-Friendly Resume Builder",
    "ATS-Friendly Resume",
    "ATS Resume Template",
    "Free ATS Resume Builder",
    "CV Builder",
    "Free CV Maker",
    "Online CV Maker",
    "Professional Resume Maker",
    "Resume Creator",
    "Resume Templates",
    "Professional CV Templates",
    "PDF Resume Builder",
    "Job Application Resume",
    "Career Documents",
  ],

  authors: [{ name: "Dev 404" }],
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
    title: "LikhaPage | Create Your Professional Resume",
    description:
      "Build a professional, ATS-friendly resume with LikhaPage. Customize your layout, preview your document, and download your resume as a PDF for free.",
    images: [
      {
        url: "/logo/secondary.png",
        width: 512,
        height: 512,
        alt: "LikhaPage - Free Online Resume Builder",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "LikhaPage | Free ATS-Friendly Resume Builder",
    description:
      "Create, customize, and download professional ATS-friendly resumes for free with LikhaPage.",
    images: ["/logo/secondary.png"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}