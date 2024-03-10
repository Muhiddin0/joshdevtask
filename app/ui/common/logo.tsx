import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";

type Props = {};

const Logo = (props: Props) => {
  return (
    <button className="flex items-center justify-center gap-3">
      <Image src={logo} alt="logo" width={40} height={40} />
      <b className="text-3xl">Marico</b>
    </button>
  );
};

export default Logo;
