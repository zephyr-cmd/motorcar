import {
  Inter,
  Roboto_Mono,
  Exo,
  Exo_2,
  Nunito,
  Poppins,
  Noto_Sans,
  // Geist,
  // GeistMono,
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

export const exo = Exo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});
export const exo2 = Exo_2({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
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
export const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});
// export const geist = Geist({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist",
// });
// export const geistMono = GeistMono({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-mono",
// });
