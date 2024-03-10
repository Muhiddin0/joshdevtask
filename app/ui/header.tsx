"use client";

import React from "react";
import Logo from "./common/logo";

// Icons
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CiLight } from "react-icons/ci";

type Props = {};

function ThemeList() {
  let themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  function handleChangeTheme(theme: string) {
    let html_ = document.querySelector("html") as HTMLElement;
    html_.setAttribute("data-theme", theme);
  }

  return (
    <div className="rounded-box flex flex-col gap-5">
      {themes.map((theme) => {
        return (
          <div
            key={theme}
            onClick={() => handleChangeTheme(theme)}
            className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme={theme}
            data-act-class="!outline-base-content"
          >
            <div
              data-theme={theme}
              className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="bg-base-200 col-start-1 row-span-2 row-start-1" />{" "}
                <div className="bg-base-300 col-start-1 row-start-3" />{" "}
                <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div className="font-bold">{theme}</div>{" "}
                  <div className="flex flex-wrap gap-1">
                    <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-primary-content text-sm font-bold">
                        A
                      </div>
                    </div>{" "}
                    <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-secondary-content text-sm font-bold">
                        A
                      </div>
                    </div>{" "}
                    <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-accent-content text-sm font-bold">
                        A
                      </div>
                    </div>{" "}
                    <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-neutral-content text-sm font-bold">
                        A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Header = (props: Props) => {
  const NavbarItems = [
    {
      id: 1,
      path: "#About",
      title: "About",
    },
    {
      id: 1,
      path: "#Pricing",
      title: "Pricing",
    },
    {
      id: 1,
      path: "#Blog",
      title: "Blog",
    },
  ].map(({ id, path, title }) => {
    return (
      <li key={id}>
        <button className="hover:text-primary transition-colors duration-150">
          {title}
        </button>
      </li>
    );
  });

  let theme_button = (
    <label htmlFor="theme-drawer" className="btn btn-circle">
      <CiLight size={26} />
    </label>
  );

  return (
    <header className="">
      <div className="container flex items-center justify-between gap-3 py-6">
        <Logo />

        <ul className="hidden md:flex gap-4">
          <details className="dropdown">
            <summary className="cursor-pointer hover:text-primary transition-all duration-150">
              Use Cases
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral-950 rounded-md w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          {NavbarItems}
        </ul>

        <div className="hidden md:flex gap-4">
          <button className="btn btn-ghost rounded-md">Login</button>
          <button className="btn btn-primary rounded-md">Sign Up</button>
          {theme_button}
        </div>

        {/* Mobile  menu */}
        <div className="block md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="">
            {/* {theme_button} */}

            <label htmlFor="theme-drawer" className="btn btn-circle">
              <CiLight size={26} />
            </label>

            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="ml-3 btn btn-ghost rounded-md drawer-button"
            >
              <HiMenuAlt3 size={20} />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu relative max-[350px]:w-full flex justify-between p-4 w-80 min-h-full bg-base-200 text-base-content">
              <label
                htmlFor="my-drawer"
                className="btn z-10 btn-ghost absolute top-2 right-2 rounded-md"
              >
                <MdClose size={20} />
              </label>

              <ul>
                {NavbarItems}

                <ul className="menu bg-base-200 rounded-box">
                  <li>
                    <h2 className="menu-title">Use Cases</h2>
                    <ul>
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>

              <div className="flex flex-col gap-4">
                <button className="btn btn-ghost rounded-md w-full">
                  Login
                </button>
                <button className="btn btn-primary rounded-md w-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* theme menu */}
        <input id="theme-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label
            htmlFor="theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu relative max-[350px]:w-full flex justify-between p-4 w-80 min-h-full bg-base-200 text-base-content">
            <label
              htmlFor="my-drawer"
              className="btn z-10 btn-ghost absolute top-2 right-2 rounded-md"
            >
              <MdClose size={20} />
            </label>

            <ThemeList />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
