"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ThemeContext, type Theme } from "../theme_provider";

export default function ModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const availableThemes: Theme[] = ["latte", "mocha", "macchiato", "frappe"];

  console.log(theme);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-crust px-3 py-2 font-bold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-mantle">
          {theme === "latte" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-30 mt-2 origin-top-right rounded-md bg-surface0 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {availableThemes.map((theme) => {
              return (
                <Menu.Item key={theme}>
                  {({ active }) => {
                    return (
                      <button
                        className={`${
                          active ? "bg-crust font-bold" : ""
                        } block px-4 py-2 w-full z-40 hover:bg-surface1`}
                        onClick={() => setTheme(theme)}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </button>
                    );
                  }}
                </Menu.Item>
              );
            })}
            <Menu.Item key={"system"}>
              {({ active }) => {
                return (
                  <button
                    className={`${
                      active ? "bg-crust font-bold" : ""
                    } block px-4 py-2 w-full z-40 hover:bg-surface1`}
                    onClick={() => setTheme("system")}>
                    System
                  </button>
                );
              }}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
