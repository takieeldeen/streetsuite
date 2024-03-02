function Options({ title, options }) {
  return (
    <form>
      <p className="mb-2 text-sm font-bold text-white">{title}</p>
      {/* All radio buttons */}
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div key={index} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              value={option.value}
              name={title}
              id={option.value}
              className="relative h-0 w-0 before:absolute before:top-1/2 before:block before:h-4 before:w-4 before:-translate-y-1/2 before:cursor-pointer before:rounded-full before:border-4 before:border-geekLight before:content-[''] checked:before:bg-geekAccent"
            />
            <label
              htmlFor={option.value}
              className="ml-4 cursor-pointer font-sans text-xs text-white"
            >
              {option.name}
            </label>
          </div>
        ))}
        {/* Radio Group */}
      </div>
    </form>
  );
}

export default Options;
