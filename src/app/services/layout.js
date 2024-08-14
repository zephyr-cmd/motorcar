import { exo, nunito, poppins } from "@/app/fonts";
import Footer from "@/app/_components/Footer";

// export const metadata = {
//   title: "AdaLabs  Inc.",
//   description: "something new",
// };

export default function ServicesLayout({ children }) {
  let isOpen = false;
  return (
    <div
      lang="en"
      className={` ${exo.variable} ${nunito.variable} ${poppins.variable}`}
    >
      {children}
      <Footer />
    </div>
  );
}
