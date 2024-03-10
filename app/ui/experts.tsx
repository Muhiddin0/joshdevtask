import React from "react";
import Image from "next/image";

import experts from "@/assets/experts.svg";

type Props = {};

const Experts = (props: Props) => {
  return (
    <section>
      <div className="container">
        <h1 data-aos="flip-up" className="text-4xl font-semibold text-center">
          Experts Agree
        </h1>
      </div>
      <Image className="w-full h-auto mt-6" src={experts} alt="experts" />
    </section>
  );
};

export default Experts;
