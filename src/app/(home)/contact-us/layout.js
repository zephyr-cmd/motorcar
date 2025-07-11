export const metadata = {
  title: "Contact Us | AdaLabs",
  description:
    "Reach out to Adalabs for expert IT consulting, enterprise solutions, or tech support. Our team is here to help you drive innovation and solve digital challenges.",

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
    canonical: "https://adalabs.in/contact-us",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  openGraph: {
    title: "Contact AdaLabs - IT Consulting & Digital Solutions ",
    description:
      "Explore how Adalabs helps organizations lead through AI, automation, and enterprise IT. Transform operations and scale innovation with our expert solutions.",

    url: "https://adalabs.in/contact-us",
    siteName: "Adalabs & Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png", // Must be an absolute URL facebook
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png", // Must be an absolute URL signal /telegram /twiiter
        width: 1800,
        height: 1600,
        alt: "Adalabs Thumbnail",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - AdaLabs | Engineering Tomorrow through Innovation",
    description:
      "From automation to enterprise tech, Adalabs delivers smart IT services that accelerate growth and simplify operations. Talk to us today.",
    site: "@AdaLabsInfo",
    creator: "@AdalabsInfo",
    // creator: "@AdaLabsInfo",
    // creatorId: "1467726470533754880",
    images: [
      "https://res.cloudinary.com/dvyqrnnen/image/upload/v1737738237/Adalabs_tpp0ld.png",
    ],
  },
};

export default function ServicesLayout({ children }) {
  return <div>{children}</div>;
}
