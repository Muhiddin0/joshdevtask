import React from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";

import one_link from "@/assets/one-link.svg";
import one_link_sub from "@/assets/one-link-sub.svg";

type Props = {};

function AdsMobile({}: Props) {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-5 my-7">
        <div
          data-aos="zoom-out"
          className="col-span-1 bg-neutral overflow-hidden relative"
        >
          <Image src={one_link} alt="one link" className="w-full" />
          <div className="absolute bottom-10 w-full">
            <Marquee className="text-[#84E575] z-10 drop-shadow-lg">
              yourname.wavium.co
            </Marquee>
          </div>
        </div>
        <div data-aos="zoom-out" className="col-span-1 bg-neutral">
          <Image src={one_link_sub} alt="one link" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default AdsMobile;
