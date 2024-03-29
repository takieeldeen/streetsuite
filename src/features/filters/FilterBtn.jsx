import Button from "../../ui/Button";
import { cloneElement } from "react";
import SVG from "../../ui/SVG";
import { useSearchParams } from "react-router-dom";

function FilterBtn({ filters }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedFilters = searchParams.getAll(filters.title.toLowerCase());
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-white">{filters.title}</p>

      <ul className="grid grid-cols-2 gap-2  pl-2">
        {filters.filters.map((filter, index) => (
          <li
            key={index}
            className=" relative flex cursor-pointer items-center justify-start gap-2 before:absolute before:-left-2  before:block before:h-8 before:w-[2px] before:bg-neutral-500 before:content-['']"
          >
            <input
              type="checkbox"
              name={filters.name}
              value={filter.value}
              id={filter.value}
              className="peer hidden"
              defaultChecked={appliedFilters.includes(filter.value)}
            />
            <SVG src={`./${filter.icon}.svg`} className={`h-4 w-4`} />
            <label
              htmlFor={filter.value}
              className="cursor-pointer text-[10px] text-white transition-all duration-300 peer-checked:text-geekAccent"
            >
              {filter.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterBtn;
