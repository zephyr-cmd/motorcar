import { exo, exo2, nunito, poppins } from "@/components/Fonts/fonts";
import Footer from "@/app/_components/Footer";
import { Toaster } from "@/components/ui/sonner";

// export const metadata = {
//   title: "AdaLabs  Inc.",
//   description: "something new",
// };

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
