import Footer from "@/app/_components/Footer";
import HeaderCarousel from "@/app/_components/HeaderCarousel";
import { exo, exo2, nunito, poppins } from "@/components/Fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
// import "../globals.css";

export const metadata = {
  title: "AdaLabs: ",
  description: "Something New",
};

export default function ServicesLayout({ children }) {
  let isOpen = false;
  return (
    <div
      lang="en"
      className={` ${exo.variable} ${exo2.variable} ${nunito.variable} ${poppins.variable}`}
    >
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}
