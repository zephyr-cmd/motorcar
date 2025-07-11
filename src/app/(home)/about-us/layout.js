export const metadata = {
  title: "About Us | adalabs - Your Partner in Digital Transformation",
  description:
    "Learn about adalabs’s mission, vision, and team. As a leading provider of IT consulting and enterprise solutions, we are committed to driving innovation and delivering impactful digital experiences.",

  keywords: [
    "Adalabs",
    "About Adalabs",
    "IT Company",
    "IT consulting",
    "Enterprise Solutions",
    "Digital Transformation",
    "Tech Consulting",
    "AI services",
    "Enterprise Software",
    "Innovation",
    "Leadership Team",
  ],

  alternates: {
    canonical: "https://adalabs.in/about-us",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  openGraph: {
    title: "About Adalabs | Empowering Digital Innovation Across Industries",
    description:
      "At adalabs, we are driven by a passion for technology and innovation. Meet our leadership team and discover how we’re helping businesses thrive with AI, cloud, and enterprise IT solutions.",
    url: "https://adalabs.in/about-us",
    siteName: "Adalabs & Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/adalabs_tpp0ld.png",
        width: 800,
        height: 600,
        alt: "Adalabs About Us Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us - Adalabs | Experts in Digital Innovation & IT Consulting",
    description:
      "Adalabs is a forward-thinking IT consulting firm helping businesses embrace AI, automation, and digital transformation. Get to know our story and team.",
    site: "@AdalabsInfo",
    creator: "@AdalabsInfo",
    images: [
      "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/adalabs_tpp0ld.png",
    ],
  },
};

export default function ServicesLayout({ children }) {
  return <div>{children}</div>;
}
