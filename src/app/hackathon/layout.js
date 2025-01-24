import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Ada Hacks - Powered by Adalabs",
  description:
    "Join Ada Hacks - A Hackathon platform for innovators and tech enthusiasts to solve real-world challenges. Showcase your skills, collaborate with experts, and win exciting prizes while pushing the boundaries of innovation!",
  openGraph: {
    title: "Ada Hacks - Powered by Adalabs",
    description:
      "AdaLabs's Hackathon brings together brilliant minds to tackle real-world challenges through innovation and collaboration. Compete, create, and connect with tech leaders for a chance to shine and win incredible rewards.",
    siteName: "Hackathon by Adalabs & Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737738391/adaHacksThumbnail_mq55gx.png", // Must be an absolute URL by FB
        width: 800,
        height: 600,
      },
      {
        url: "https://unsplash.com/photos/yhCHx8Mc-Kc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8Mnx8MTczNzczNzg2MHw&force=true&w=2400", // Must be an absolute URL by telegram
        width: 1800,
        height: 1600,
        alt: "Ada Hacks ",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "WebApp",
    title: "Ada Hacks - Powered by Adalabs",
    description:
      "AdaLabs's Hackathon brings together brilliant minds to tackle real-world challenges through innovation and collaboration. Compete, create, and connect with tech leaders for a chance to shine and win incredible rewards.",
    siteId: "AdaLabsInfo",
    // creator: "@AdaLabsInfo",
    // creatorId: "1467726470533754880",
    images: [
      "https://unsplash.com/photos/yhCHx8Mc-Kc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8Mnx8MTczNzczNzg2MHw&force=true&w=2400",
    ], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <div>{children}</div>
        <Toaster />
      </div>
    </>
  );
}
