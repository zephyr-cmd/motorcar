import { inter, exo, exo2, nunito, poppins } from "@/components/Fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "AdaLabs & Co. || Engineering Tomorrow through AI, IT, & Innovation",
  description:
    "Pioneer in IT services, consulting, and business solutions, driving innovation and enabling business transformation.  Empowering organizations to embrace change and unlock their full potential through cutting-edge technology. Discover how we make it happen.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${exo.variable} ${exo2.variable} ${nunito.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
