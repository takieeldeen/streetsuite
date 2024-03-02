function TextOptions({ title, options }) {
  return (
    <div className="flex flex-col items-center ">
      <p className="mb-2 text-sm font-bold text-white">Strategy</p>
      <div className="flex flex-col items-center">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={title.toLowerCase()}
              value={option.value}
              id={option.value}
              className="peer h-0 w-0"
            />
            <label
              className="cursor-pointer p-[2px] px-[4px] text-xs text-neutral-500 peer-checked:rounded peer-checked:bg-geekAccent peer-checked:text-neutral-100"
              htmlFor={option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextOptions;
