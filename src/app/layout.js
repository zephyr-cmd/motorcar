import { inter, exo, exo2, nunito, poppins } from "@/components/Fonts/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  title: "AdaLabs - Engineering Tomorrow through Innovation ",
  description:
    "Discover how Adalabs's innovative IT services empower leaders. From AI to enterprise solutions, we provide the tools and insights needed to streamline operations and fuel growth.",
  openGraph: {
    title: "AdaLabs - Engineering Tomorrow through Innovation ",
    description:
      "Discover how Adalabs's innovative IT services empower leaders. From AI to enterprise solutions, we provide the tools and insights needed to streamline operations and fuel growth.",
    url: "https://adalabs.in",
    siteName: "Adalabs & Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png", // Must be an absolute URL facebook
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png", // Must be an absolute URL signal /telegram
        width: 1800,
        height: 1600,
        alt: "Adalabs Thumbnail",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "WebApp",
    title: "AdaLabs - Engineering Tomorrow through Innovation",
    description:
      "Discover how Adalabs's innovative IT services empower leaders. From AI to enterprise solutions, we provide the tools and insights needed to streamline operations and fuel growth.",
    siteId: "AdaLabsInfo",
    // creator: "@AdaLabsInfo",
    // creatorId: "1467726470533754880",
    images: [
      "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png",
    ], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${exo.variable} ${exo2.variable} ${nunito.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-66GMXLVZCM" />
    </html>
  );
}
