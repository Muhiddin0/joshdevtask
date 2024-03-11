import React from "react";
import Image from "next/image";

import happyUsers from "@/assets/avatar-lists.svg";
import happyUsersList from "@/assets/user-list.png";
import Marquee from "react-fast-marquee";

type Props = {};

const HappyUsers = (props: Props) => {
  return (
    <section className="flex items-center justify-center flex-col relative my-16 ">
      <Marquee speed={14}>
        <Image src={happyUsersList} alt="happy users" />
        <Image src={happyUsersList} alt="happy users" />
      </Marquee>
      <Marquee speed={14} direction="right">
        <Image src={happyUsersList} alt="happy users" />
        <Image src={happyUsersList} alt="happy users" />
      </Marquee>
      <Marquee speed={14}>
        <Image src={happyUsersList} alt="happy users" />
        <Image src={happyUsersList} alt="happy users" />
      </Marquee>
      <Marquee speed={14} direction="right">
        <Image src={happyUsersList} alt="happy users" />
        <Image src={happyUsersList} alt="happy users" />
      </Marquee>
      <Marquee speed={14}>
        <Image src={happyUsersList} alt="happy users" />
        <Image src={happyUsersList} alt="happy users" />
      </Marquee>

      <div className="absolute flex items-center justify-center z-20 top-0 left-0 inner_shadow bottom-10 w-full h-full"></div>
      <div className="bg-effect absolute z-10 flex items-center justify-center w-full h-full"></div>
      <b className="absolute z-20 drop-shadow-2xl text-xl md:text-2xl font-semibold text-center w-full">
        We've helped over 1,000 creatorsre claim control of their audience.
      </b>
    </section>
  );
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
