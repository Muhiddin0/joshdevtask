import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content text-center">
        <div data-aos="fade-up" className="">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl flex items-center justify-center flex-col gap-2 text-center font-bold">
            <span>Own your audience.</span>
            <span className="text-gradient">So you don't lose theme</span>
            {/* <Image height={160} src={heroTitle} alt="hero title" /> */}
          </h1>
          <p className="pt-12 text-center text-2xl font-semibold">
            Turn your audience into email and text message subscribers.{" "}
          </p>
          <div className="mt-6 flex gap-3 items-center flex-wrap justify-center">
            <button className="btn btn-primary rounded-md max-[500px]:w-full lg:!px-10">
              Get Started Now
            </button>
            <button className="btn btn-secondary btn-outline rounded-md max-[500px]:w-full lg:!px-10">
              Get Started Now
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 justify-center">
            <div className="relative h-[20px] w-[20px]">
              <span className="animate-ping left-0 absolute w-full h-full inline-flex rounded-full bg-green-400 opacity-75"></span>
              <div className="block h-[20px] w-[20px] rounded-full bg-green-400"></div>
            </div>

            <b className="font-semibold">1000+</b>
            <span className="text-secondary">
              creators have already started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
