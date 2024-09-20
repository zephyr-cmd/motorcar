import { inter, exo, exo2, nunito, poppins } from "@/components/Fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "AdaLabs  Inc.",
  description: "something new",
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
