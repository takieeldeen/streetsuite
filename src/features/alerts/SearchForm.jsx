import { cloneElement } from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm({ styling = "light", ...options }) {
  return (
    <form className="w-full">
      <div className="relative flex w-full">
        {cloneElement(
          <input
            type="text"
            className={`h-[38px] w-full rounded bg-geekLight px-4 py-2 font-sans text-white placeholder:text-sm ${styling === "light" ? "placeholder:text-white" : "placeholder:text-neutral-500"} focus:outline-none`}
          />,
          options,
        )}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5d5d5d]">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
