import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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

export const metadata = {
  metadataBase: new URL('https://resumake-builder.vercel.app'),
  title: {
    default: "ResuMake | Free ATS-Friendly Resume Builder",
    template: "%s | ResuMake",
  },
  description: "Build professional, ATS-optimized resumes in minutes with live previews and instant PDF downloads.",

  verification: {
    google: 'google4d297be11b314d97.html',
  },

  icons: {
    icon: '/logo/secondary.png',
    shortcut: '/logo/secondary.png',
    apple: '/logo/secondary.png',
  },
  
  keywords: [
    "Resume Builder",
    "Free Resume Builder",
    "ATS Resume",
    "Free ATS Resume",
    "CV Maker",
    "Free Resume Generator",
    "Professional CV",
  ],
  authors: [{ name: "Dev 404" }],
  creator: "ResuMake",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumake-builder.vercel.app',
    title: 'ResuMake | Free ATS-Friendly Resume Builder',
    description: 'Create tailored, ATS-compliant resumes quickly with automated formatting and live PDF export.',
    siteName: 'ResuMake Workspace',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResuMake | Free ATS-Friendly Resume Builder',
    description: 'Design professional resumes in minutes with live previews.',
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