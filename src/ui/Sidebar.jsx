import { NavLink } from "react-router-dom";
import Button from "./Button";
import SVG from "./SVG";

function Sidebar() {
  return (
    <nav className=" cubic-bez group  absolute  z-20 ml-2  flex h-screen w-[76px] flex-col items-start gap-4 bg-geekDark pl-6 text-white transition-all duration-300 hover:w-[160px] hover:pl-4 hover:drop-shadow-xl">
      <figure className="absolute -translate-x-3">
        <img
          src="./logo.png"
          alt="Street suit logo"
          className="mt-4 w-12 origin-top-left transition-all duration-300 group-hover:scale-[2.5]"
        />
      </figure>

      {/* <NavLink
        to="/"
        className="z-20 flex items-center gap-2 text-xl font-semibold hover:text-geekAccent"
      >
        <SVG src="./bell.svg"></SVG>
        <p className=" translate-x-4 opacity-0 transition-all duration-300 hover:text-geekAccent group-hover:relative  group-hover:translate-x-0 group-hover:opacity-100">
          Alerts
        </p>
      </NavLink> */}
      <ul className="mt-24 flex h-full flex-col gap-4  transition-all duration-300 group-hover:scale-[0.9]">
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-3 transition-all duration-300 group-hover:scale-[0.9]"
          >
            <SVG src="./bell.svg"></SVG>
            <p className="translate-x-6  opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Alerts
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/training"
            className="flex items-center gap-3 transition-all duration-300 group-hover:scale-[0.9]"
          >
            <SVG src="./hat.svg"></SVG>
            <p className="translate-x-6  opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Training
            </p>
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/automation"
            className="soon flex items-center gap-3 transition-all duration-300 group-hover:scale-[0.9] "
          >
            <SVG src="./settings.svg" className="bg-[#5d5d5d]"></SVG>
            <p className="translate-x-6  opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Automation
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="soon flex items-center gap-3 transition-all duration-300 group-hover:scale-[0.9]"
          >
            <SVG src="./folders.svg" className="bg-[#5d5d5d]"></SVG>
            <p className="translate-x-6  opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Portfolio
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trading"
            className="soon flex items-center gap-3 transition-all duration-300 group-hover:scale-[0.9]"
          >
            <SVG src="./stocks.svg" className="bg-[#5d5d5d]"></SVG>
            <p className="translate-x-6  opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Stock
            </p>
          </NavLink>
        </li>
        <li className="mb-4 mt-auto">
          <NavLink className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-3">
            <img src="./profile.svg" alt="Notifications" />
            <div className="text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
              <p className="font-semibold">Moni Roy</p>
              <p className="text-[10px] text-[#cfcfcf]">Beginner</p>
            </div>
          </NavLink>
        </li>
      </ul>
      <p className=" duration-400 absolute bottom-2 left-1/2 w-full -translate-x-1/2 text-center text-xs font-light text-[#cfcfcf] opacity-0 transition-all group-hover:opacity-100">
        Street Suite 2.0
      </p>
    </nav>
  );
}

export default Sidebar;
