import { Poppins, Playfair_Display } from 'next/font/google';
import "../assets/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-poppins',
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-playfair',
  display: "swap",
});

export const metadata = {
  title: {
    default: "Babatira Furniture | Premium Furniture for Homes & Offices",
    template: "%s | Babatira Furniture"
  },
  description: "Babatira Furniture and General Supply Company LTD - Manufacturers of high-quality furniture for homes, offices, and commercial spaces. Custom designs available since 1995.",
  keywords: [
    "furniture",
    "premium furniture",
    "office furniture",
    "custom furniture",
    "home furniture",
    "Nigerian furniture",
    "furniture design",
    "furniture manufacturing"
  ],
  openGraph: {
    title: "Babatira Furniture | Premium Furniture for Homes & Offices",
    description: "Crafting elegant furniture solutions for homes and businesses since 1995. Quality, durability, and timeless design.",
    url: "https://www.babatirafurniture.com",
    siteName: "Babatira Furniture",
    images: [
      {
        url: "/images/2.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babatira Furniture | Premium Furniture for Homes & Offices",
    description: "Crafting elegant furniture solutions for homes and businesses since 1995.",
    images: ["/images/7.webp"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}