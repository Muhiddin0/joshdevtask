import React from "react";
import Image from "next/image";

type Props = {
  image: any;
  title: {
    top: string;
    bottom: string;
    main: string;
  };
  params: string[];
  top_text: string;
};

const Ads_desktop = ({ image, params, title, top_text }: Props) => {
  return (
    <section className=" body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse">
          <div
            data-aos="fade-down-right"
            className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0"
          >
            <p>{top_text}</p>

            <h2 className="text-4xl text-center lg:text-start font-bold mt-6">
              {title.top}
              <br />
              {title.bottom} <span className="text-primary">{title.main}</span>
            </h2>

            <div className="my-6 text-center lg:text-start">
              {params.map((param, index) => (
                <p key={index}>
                  <span className="inlin-flex items-center justify-center w-[20px] h-[20px] badge badge-neutral rounded-full">
                    {index + 1}
                  </span>
                  <span className="ml-2">{param}</span>
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
              <button className="btn btn-primary rounded-md">
                Get Started Now
              </button>
              <button className="btn btn-secondary btn-outline rounded-md">
                View A Demo{" "}
              </button>
            </div>
          </div>
          <Image
            data-aos="fade-down-left"
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Ads_desktop;
