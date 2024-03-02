import { useState } from "react";
import Button from "../../ui/Button";

function FilterTag({ filter, name }) {
  const [visible, setVisiblity] = useState(true);

  const toggleVisibility = (e) => {
    if (e.target.dataset.filter === filter) setVisiblity(!visible);
  };

  return (
    visible && (
      <div
        onClick={(e) => toggleVisibility(e)}
        className="flex  gap-2 rounded-md  bg-geekAccent px-2 text-xs"
      >
        {/* <input type="checkbox" id={filter} name={name} /> */}
        <p>{filter}</p>
        <label data-filter={filter} htmlFor={filter} className="cursor-pointer">
          X
        </label>
        {/* <Button className="text-bold">X</Button> */}
      </div>
    )
  );
}

export default FilterTag;
