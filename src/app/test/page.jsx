import HeaderCarousel from "@/app/_components/HeaderCarousel";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    // <div className="flex-none w-full min-h-screen overflow-hidden relative">
    //   <div className="flex-none w-full min-h-screen overflow-hidden relative">
    //     <Image
    //       src={"/introThumbnail.png"}
    //       alt={`introThumbnail`}
    //       fill
    //       style={{ objectFit: "cover", overflow: "hidden" }}
    //       priority={true}
    //     />
    //   </div>
    //   <div className="absolute inset-0 w-screen min-h-screen">
    //     <video
    //       src={"introVideo4.mp4"}
    //       className="w-full h-full object-cover"
    //       autoPlay
    //       playsInline
    //       loop
    //       muted
    //     />
    //   </div>
    // </div>
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/introVideo4.mp4" // Replace with the path to your video
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-white text-6xl md:text-8xl flex font-bold h-full w-full justify-center bg-black mix-blend-multiply px-4 py-56 text-center">
          Coming Soon
        </h1>
        <div className="absolute inset-y-1/2 w-full py-4 text-center text-sm">
          <p className="mt-4 text-xl text-center">
            Our Application is under construction. We&apos;ll be here soon with
            our new awesome features.
          </p>
          <Link
            className="mt-4 flex w-full justify-center"
            href={"/"}
            aria-label="Go Back to Home"
          >
            <Button className="w-fit " variant="projectbtn1">
              Go Back Home
            </Button>
          </Link>
        </div>
        <footer className="absolute bottom-0 w-full py-4 text-center text-sm">
          <p>Copyright © 2024 AdaLabs & Co. </p>
          <p>All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
