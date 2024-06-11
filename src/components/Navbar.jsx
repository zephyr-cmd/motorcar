import React from "react";

// import Logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 flex h-16 items-center justify-between bg-gradient-to-b from-black to-black/0 px-20">
      {/* <Logo className="w-60" /> */}
      <div className="flex w-full justify-center sm:w-60 sm:justify-start items-center mt-7">
        <Image
          src={"/adalabs.png"}
          alt="adaLabs"
          width={300}
          height={150}
        ></Image>
      </div>
      <div className="hidden gap-6 sm:flex">
        <Link href="#">Air</Link>
        <Link href="#">Water</Link>
        <Link href="#">Soil</Link>
        {/* <Link href="#">Fire</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
