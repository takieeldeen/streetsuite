import { cloneElement } from "react";

function SVG({ src, className = "", ...options }) {
  if (!className.includes("w-")) className += " w-6";
  if (!className.includes("h-")) className += " h-6";
  if (!className.includes("bg-")) className += " bg-white";
  return cloneElement(
    <div
      style={{
        maskSize: "100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
      className={className}
    ></div>,
    options,
  );
}

export default SVG;
