import { inter } from "@/components/Fonts/fonts";
// import "../globals.css";

export const metadata = {
  title: "AdaLabs & Co.",
  description: "Something New",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
