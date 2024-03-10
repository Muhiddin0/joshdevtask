import React from "react";
import Image from "next/image";

import logo from "@/assets/logo.svg";

type Props = {};

const HeroBottom = (props: Props) => {
  return (
    <section>
      <div className="container flex items-center justify-center flex-col gap-2">
        <Image
          data-aos="fade-up"
          width={100}
          height={100}
          src={logo}
          alt="logo"
        />
        <h1
          data-aos="fade-up"
          className="text-4xl font-semibold text-center mt-3"
        >
          Get Started Now
        </h1>
        <p data-aos="fade-up" className="text-center">
          Setup is easy and takes under 5 minutes.
        </p>
        <button
          data-aos="fade-up"
          className="btn btn-primary btn-block sm:btn-wide rounded-md"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HeroBottom;
