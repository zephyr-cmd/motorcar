import { Suspense } from "react";
import HeaderCarousel from "@/app/_components/HeaderCarousel";
import Footer from "@/app/_components/footer/Footer";
import { Loading } from "@/components/ui/loader";
import Section2 from "@/app/_components/Section2";
import Section3 from "@/app/_components/Section3";
import ContactForm from "@/app/_components/formSection";
import Specialities from "@/app/_components/Specialities";
import { Toaster } from "sonner";
import Subscriber from "@/app/_components/subscriber";
import SectionTwoCarousel from "@/app/_components/sectionTwo/page";

export default function Home() {
  return (
    <main className={`flex flex-col dark:hidden justify-center`}>
      <Suspense fallback={<Loading />}>
        <HeaderCarousel />
        {/* <Section2 /> */}
        <SectionTwoCarousel />
        <Specialities />
        {/* <Section3 /> */}
        <ContactForm />
        <Subscriber />
        <Footer />
        <Toaster />
      </Suspense>
    </main>
  );
}
