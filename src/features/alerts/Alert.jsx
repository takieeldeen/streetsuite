import { useState } from "react";
import SVG from "../../ui/SVG";

function Alert({ alert }) {
  const [expanded, setExpanded] = useState(false);
  const toggleAlert = () => setExpanded(!expanded);
  return (
    <div onClick={() => toggleAlert()}>
      <div
        className={`grid w-full cursor-pointer grid-cols-4  divide-x-2 divide-neutral-700 rounded p-2 lg:h-[59px] ${expanded ? "bg-geekAccent font-semibold" : "bg-geekLight"}`}
      >
        <p className="flex items-center justify-center text-white lg:grid lg:grid-cols-2 lg:justify-start">
          <img
            src="./tag.svg"
            className="hidden h-[30px]   lg:block lg:w-[32.71px] lg:justify-self-center"
            alt=""
          />
          <span className="text-xs lg:text-[15px]">{alert.stock}</span>
        </p>
        <p className="flex items-center justify-center text-white lg:grid lg:grid-cols-2 lg:justify-start">
          <img
            src="./shares.svg"
            className="hidden h-[30px]  lg:block lg:w-[32.71px] lg:justify-self-center"
            alt=""
          />
          <span className="text-xs lg:text-[15px]">{alert.qty}</span>
        </p>
        <p className="flex items-center justify-center text-white lg:grid lg:grid-cols-2 lg:justify-start">
          <img
            src="./market.svg"
            className="hidden h-[30px]   lg:block lg:w-[32.71px] lg:justify-self-center"
            alt=""
          />
          <span
            className={`${alert.market > 0 ? "text-geekGreen" : "text-geekRed"} text-xs lg:text-[15px]`}
          >{`${alert.market} %`}</span>
        </p>
        <p className="flex items-center justify-center text-white lg:grid lg:grid-cols-2 lg:justify-start">
          <img
            src={`${alert.risk === "High" ? "./highrisk.svg" : "./lowrisk.svg"}`}
            className="hidden h-[30px]   lg:block lg:w-[32.71px] lg:justify-self-center"
            alt=""
          />
          <span className="text-xs capitalize lg:text-[15px]">{`${alert.risk} Risk`}</span>
        </p>
      </div>
      {/* Details */}
      <div
        className={`flex select-none flex-col gap-2 rounded-bl-lg  rounded-br-lg bg-geekDark p-6 font-light text-white ${expanded ? "visible" : "hidden"}`}
      >
        <h3 className="text-sm lg:text-base">
          <strong className="font-semibold">$TSLA</strong> just announced an
          acquisition of <strong className="font-semibold">$NFLX</strong> at{" "}
          <strong className="font-semibold">$200 B</strong>.
        </h3>
        <p className="text-xs lg:text-base ">
          This is an{" "}
          <span className="text-geekAccent underline">
            arbitrage opportunity
          </span>
          , with the max gain being <span>%x</span> If the deal closes, but the
          possible risk is <span>%Y</span>If the deal fails, If the deal success
          is % and therefore the recommended play is <span>long/short</span>{" "}
          $ABC
        </p>
      </div>
    </div>
  );
}

export default Alert;
