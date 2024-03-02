import Button from "../../ui/Button";

function FilterTag({ filter }) {
  return (
    <div className="rounded-md  bg-geekAccent px-2  text-xs">
      <span className="mr-1 ">{filter}</span>
      <Button className="text-bold">X</Button>
    </div>
  );
}

export default FilterTag;
