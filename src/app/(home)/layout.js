import {
  inter,
  exo,
  exo2,
  nunito,
  poppins,
  notoSans,
} from "@/components/Fonts/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "AdaLabs: ",
  description: "Something New",
};

export default function ServicesLayout({ children }) {
  let isOpen = false;
  return (
    <div
      lang="en"
      className={`${inter.variable} ${exo.variable} ${exo2.variable} ${nunito.variable} ${poppins.variable} ${notoSans.variable}`}
    >
      {children}
      <Toaster />
    </div>
  );
}
