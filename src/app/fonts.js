import {
  Inter,
  Roboto_Mono,
  Foldit,
  Exo,
  Nunito,
  Poppins,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
export const foldit = Foldit({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-foldit",
});

export const exo = Exo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});
export const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
