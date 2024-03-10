import React from "react";
import Logo from "./common/logo";

type Props = {};

const Footer = (props: Props) => {
  const footer_items = [
    {
      title: "About",
      path: "#About",
    },
    {
      title: "Pricing",
      path: "#Pricing",
    },
    {
      title: "Blog",
      path: "#Blog",
    },
    {
      title: "Sign-in",
      path: "#Sign-in",
    },
  ].map(({ path, title }) => {
    return (
      <li
        className="hover:text-primary transition-colors duration-150 cursor-pointer"
        key={path}
      >
        {title}
      </li>
    );
  });

  return (
    <footer>
      <div className="container flex items-center justify-between flex-col sm:flex-row gap-4 mt-6 py-5">
        <div>
          <Logo />
          <p className="text-secondary text-center sm:text-start">
            info@marico.co
          </p>
        </div>

        <ul className="flex gap-3 flex-grow-[2] justify-around sm:justify-end">
          {footer_items}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
