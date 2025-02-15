"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="md:block hidden cursor-pointer"
      height={100}
      width={100}
      src="assets/images/vercel.svg"
    />
  );
};

export default Logo;
