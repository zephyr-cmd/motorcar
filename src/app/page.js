import { Suspense } from "react";
import HeaderCarousel from "@/app/_components/HeaderCarousel";
import Footer from "@/app/_components/footer/Footer";
import { Loading } from "@/components/ui/loader";
import dynamic from "next/dynamic";
import Section2 from "@/app/_components/Section2";
import Section3 from "@/app/_components/Section3";
import ContactForm from "@/app/_components/formSection";
import Specialities from "@/app/_components/Specialities";
import { Toaster } from "sonner";
import SectionTwoCarousel from "./(home)/two/page";
import IndustriesSection from "./_components/landingPage/IndustriesSection";
import TestimonialsSection from "./_components/landingPage/TestimonialsSection";
import JoinTeamSection from "./_components/landingPage/JoinTeamSection";

const ConsultationSection = dynamic(
  () => import("@/app/_components/landingPage/ConsultationSection"),
  {
    ssr: false, // Disable server-side rendering
  },
);

export default function Home() {
  return (
    <main className={`flex flex-col dark:hidden justify-center`}>
      <Suspense fallback={<Loading />}>
        <HeaderCarousel />
        {/* <Section2 /> */}
        <SectionTwoCarousel />
        <IndustriesSection />
        <Specialities />
        <TestimonialsSection />
        {/* <Section3 /> */}
        {/* <ContactForm /> */}
        <ConsultationSection />
        <JoinTeamSection />
        <Footer />
        <Toaster />
      </Suspense>
    </main>
  );
}
