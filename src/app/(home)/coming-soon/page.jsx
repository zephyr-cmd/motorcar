import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommingSoon() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black gap-4 text-white">
      <h1 className="text-4xl sm:text-6xl text-center font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text p-5">
        Coming Soon
      </h1>
      <p className="mt-4 text-xl text-center">
        Our Application is under construction. We&apos;ll be here soon with our
        new awesome features.
      </p>
      <Link className="mt-4" href={"/"} aria-label="Go Back to Home">
        <Button className="" variant="projectbtn1">
          Go Back Home
        </Button>
      </Link>
      <footer className="absolute bottom-0 w-full py-4 text-center text-sm">
        <p>Copyright © 2024 AdaLabs & Co. </p>
        <p>All Rights Reserved.</p>
      </footer>
    </div>
  );
}
