import React from "react";
import Image from "next/image";

import happyUsers from "@/assets/avatar-lists.svg";

type Props = {};

const HappyUsers = (props: Props) => {
  return (
    <section className="flex items-center justify-center relative my-16">
      <Image
        className="w-full object-cover"
        src={happyUsers}
        alt="happy users"
      />
      <b className="container absolute text-xl md:text-2xl font-semibold text-center w-full">
        We&apos;ve helped over 1,000 creatorsre claim control of their audience.
      </b>
    </section>
  );
};

export default HappyUsers;
