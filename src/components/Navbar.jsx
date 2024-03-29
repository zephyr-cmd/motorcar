import React from "react";

// import Logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 flex h-16 items-center justify-between bg-gradient-to-b from-black to-black/0 px-20">
      {/* <Logo className="w-60" /> */}
      <div className="flex w-full justify-center sm:w-60 sm:justify-start">
        <Image
          src={"/logo.svg"}
          alt="Lucid Motor"
          width={150}
          height={100}
        ></Image>
      </div>
      <div className="hidden gap-6 sm:flex">
        <Link href="#">Air</Link>
        <Link href="#">Gravity</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
