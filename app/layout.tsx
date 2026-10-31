import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteinterior.vn"),
  title: {
    default: "Elite Interior Studio | Thiết Kế Nội Thất Cao Cấp tại TP. HCM & Hà Nội",
    template: "%s | Elite Interior Studio",
  },
  description:
    "Elite Interior Studio chuyên thiết kế và thi công nội thất cao cấp cho căn hộ, biệt thự và không gian thương mại tại TP. Hồ Chí Minh và Hà Nội. Hơn 12 năm kinh nghiệm, 350+ dự án hoàn thành.",
  keywords: [
    "thiết kế nội thất cao cấp",
    "thi công nội thất",
    "thiết kế nội thất TPHCM",
    "thiết kế nội thất Hà Nội",
    "cải tạo căn hộ",
    "thiết kế biệt thự",
    "nội thất luxury",
    "Elite Interior Studio",
  ],
  authors: [{ name: "Elite Interior Studio" }],
  creator: "Elite Interior Studio",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://eliteinterior.vn",
    siteName: "Elite Interior Studio",
    title: "Elite Interior Studio | Thiết Kế Nội Thất Cao Cấp",
    description:
      "Biến ý tưởng thành không gian sống hoàn hảo. Thiết kế nội thất cao cấp cho căn hộ, biệt thự tại Việt Nam.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop&q=90",
        width: 1200,
        height: 630,
        alt: "Elite Interior Studio — Thiết Kế Nội Thất Cao Cấp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Interior Studio | Thiết Kế Nội Thất Cao Cấp",
    description:
      "Biến ý tưởng thành không gian sống hoàn hảo. Thiết kế nội thất cao cấp cho căn hộ, biệt thự tại Việt Nam.",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop&q=90"],
  },
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
  alternates: {
    canonical: "https://eliteinterior.vn",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://eliteinterior.vn/#business",
      "name": "Elite Interior Studio",
      "url": "https://eliteinterior.vn",
      "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop&q=90",
      "description":
        "Elite Interior Studio chuyên thiết kế và thi công nội thất cao cấp cho căn hộ, biệt thự và không gian thương mại tại TP. Hồ Chí Minh và Hà Nội.",
      "telephone": "+84901234567",
      "email": "hello@eliteinterior.vn",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Nguyễn Đình Chiểu, Quận 1",
        "addressLocality": "TP. Hồ Chí Minh",
        "addressCountry": "VN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7852,
        "longitude": 106.6988
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "priceRange": "$$$$"
    },
    {
      "@type": "WebSite",
      "@id": "https://eliteinterior.vn/#website",
      "url": "https://eliteinterior.vn",
      "name": "Elite Interior Studio",
      "publisher": { "@id": "https://eliteinterior.vn/#business" },
      "inLanguage": "vi-VN"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased overflow-x-hidden"
        style={{ backgroundColor: "#F8F5F0", color: "#2F2F2F" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
