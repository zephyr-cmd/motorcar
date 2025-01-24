import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Hackathon - Powered by Adalabs",
  description:
    "Join Ada Hacks - Hackathon - a platform for innovators and tech enthusiasts to solve real-world challenges. Showcase your skills, collaborate with experts, and win exciting prizes while pushing the boundaries of innovation!",
  openGraph: {
    title: "Hackathon - Powered by Adalabs",
    description:
      "Join Ada Hacks - Hackathon - a platform for innovators and tech enthusiasts to solve real-world challenges. Showcase your skills, collaborate with experts, and win exciting prizes while pushing the boundaries of innovation!",
    siteName: "Hackathon by Adalabs & Co.",
    images: [
      {
        url: "https://res.cloudinary.com/dvyqrnnen/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737738391/adaHacksThumbnail_mq55gx.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://unsplash.com/photos/yhCHx8Mc-Kc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8Mnx8MTczNzczNzg2MHw&force=true&w=2400", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Ada Hacks ",
      },
    ],

    locale: "en_US",
    type: "website",
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
