import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="absolute z-20 inset-0 min-h-screen">
      <div className="flex flex-col h-[110px] sm:h-[85px] text-white bg-black/40">
        <div className="grid grid-cols-2 justify-between items-center px-3 ">
          <Link href={"/"} aria-label="home">
            <Image
              src={"/adalabs.svg"}
              alt="Best Hospital in Rishikesh | sarvanjana Hospital"
              height={"200"}
              width={"250"}
              style={{ objectFit: "contain" }}
              priority={true} // {false} | {true}
              //   placeholder="blur"
            />
          </Link>
          <div className="space-x-5 hidden sm:flex flex-wrap justify-center items-center text-base">
            <Link
              className="hidden lg:flex"
              href={"about-us"}
              aria-label="about us"
            >
              About Us
            </Link>
            <Link className="" href={"/coming-soon"} aria-label="departments">
              Departments
            </Link>
            <Link href={"/our-doctors"} aria-label="our doctors">
              Doctors
            </Link>
            <Link href={"/coming-soon"} aria-label="Facilities">
              Facilities
            </Link>
            <Link
              className="hidden xl:flex"
              href={"coming-soon"}
              aria-label="Blogs"
            >
              Blogs
            </Link>
            <Link
              className="hidden xl:flex"
              href={"contact-us"}
              aria-label="contact us"
            >
              Contact Us
            </Link>
          </div>
          <div className="sm:hidden flex justify-end font-extrabol text-3xl">
            <Sheet>
              <SheetTrigger>&#8801;</SheetTrigger>
              <SheetContent className="max-w-full">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={"/sarvanjana.png"}
                      alt="sarvanjana logo"
                      height={"200"}
                      width={"250"}
                      style={{ objectFit: "contain" }}
                      priority={true} // {false} | {true}
                    />
                  </SheetTitle>
                  {/* <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription> */}
                </SheetHeader>
                <SheetFooter className={"flex flex-col gap-7 mt-7"}>
                  <SheetClose asChild>
                    {/* <Button type="submit">Save changes</Button> */}
                    <Link href={"/"} aria-label="home">
                      <Button variant="ghost">Home</Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/appointment"} aria-label="appointment">
                      <Button variant="ghost">Appointment</Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/our-doctors"} aria-label="our-doctors">
                      <Button variant="ghost">Our Doctors</Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/about-us"} aria-label="about us">
                      <Button variant="ghost">About Us</Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={"/contact-us"} aria-label="contact us">
                      <Button variant="ghost">Contact Us</Button>
                    </Link>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
