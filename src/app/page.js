import { Suspense } from "react";
import HeaderCarousel from "@/app/_components/HeaderCarousel";
import Footer from "@/app/_components/Footer";
import { Loading } from "@/components/ui/loader";
import Section2 from "@/app/_components/Section2";
import Section3 from "@/app/_components/Section3";
import ContactForm from "@/app/_components/formSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Suspense fallback={<Loading />}>
        <HeaderCarousel />
        <Section2 />
        {/* <Section3 /> */}
        <ContactForm />
        <Footer />
      </Suspense>
    </main>
  );
}
