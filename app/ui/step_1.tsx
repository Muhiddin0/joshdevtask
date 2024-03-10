import React from "react";

type Props = {
  step: number;
  title: string;
  description: string;
  button_value?: string;
};

const StepsView = ({ step, title, description, button_value }: Props) => {
  return (
    <section>
      <div className="container py-6 text-center">
        <p data-aos="flip-up" className="text-primary text-center">
          Step {step}
        </p>
        <h1 data-aos="fade-up" className="text-center text-3xl font-semibold">
          {title}
        </h1>
        <p
          data-aos="fade-up"
          className="text-center text-secondary max-w-[50rem] mx-auto"
        >
          {description}
        </p>
        {button_value ? (
          <button
            data-aos="fade-up"
            className="btn btn-outline btn-secondary rounded-md mt-4"
          >
            {button_value}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default StepsView;
