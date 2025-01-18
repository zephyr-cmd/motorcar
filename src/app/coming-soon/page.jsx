import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommingSoon() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/comingSoon1.mp4" // Replace with the path to your video
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-white text-6xl md:text-8xl flex font-bold h-full w-full justify-center bg-black mix-blend-multiply px-4 pt-72 text-center">
          Coming Soon
        </h1>
        <div className="absolute inset-y-1/2 w-full py-4 text-center text-sm mt-5 sm:mt-0">
          <p className="mt-4 text-xl text-center">
            Our Application is under construction. We&apos;ll be here soon with
            our new awesome features.
          </p>
          <Link
            className="mt-4 flex w-full justify-center"
            href={"/"}
            aria-label="Go Back to Home"
          >
            <Button className="w-fit mt-5 bg-gray-800" variant="ghost">
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
