import { cloneElement } from "react";

function Button({ children, styling = "", ...options }) {
  const classNames =
    styling === "full"
      ? "rounded bg-geekAccent px-12 py-2 font-semibold text-white"
      : "";

  if (options.className) {
    options.className = classNames + options.className;
  } else {
    options.className = classNames;
  }
  return cloneElement(<button>{children}</button>, options);
}

export default Button;
