import { useState } from "react";
import Button from "../../ui/Button";
import FilterTag from "./FilterTag";
import Stock from "./Stock";
import SVG from "../../ui/SVG";
import { createPortal } from "react-dom";
import { Form, useSearchParams } from "react-router-dom";

function Filters() {
  const filterOptions = {
    industry: [],
    marketCap: "",
    riskLevel: "",
    strategy: "",
    asset: "",
  };
  const [opened, setOpened] = useState(false);
  const handleToggle = () => setOpened(!opened);
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedFilters = searchParams.getAll("industry");
  return (
    <aside
      className={` fixed right-0 ${opened ? "" : "translate-x-[100%]"} top-1/2 z-20 flex h-[95dvh] w-[350px] -translate-y-1/2 flex-col  items-center gap-2 overflow-y-scroll rounded-bl-lg rounded-tl-lg bg-geekDark p-6 pr-2 transition-all duration-300 md:relative md:right-auto md:top-auto md:translate-x-0 md:translate-y-0 lg:w-[427px]`}
    >
      <Button
        onClick={() => handleToggle()}
        className="absolute left-3 top-1 text-xl text-white md:hidden"
      >
        x
      </Button>
      {/* Showing filters in small screens */}
      {createPortal(
        <Button onClick={() => handleToggle()}>
          <SVG
            src="./filter.svg"
            className="before fixed bottom-8 right-8 z-10 h-10 w-10 bg-geekAccent md:hidden"
          />
        </Button>,
        document.body,
      )}
      <p className="text-2xl font-semibold text-white">Filters</p>
      <Form className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full justify-between">
          <p className="text-base text-[#5d5d5d]">Filters Applied</p>
          <Button className="text-white">Clear All</Button>
        </div>
        <div className=" flex min-h-14 w-full flex-wrap items-start gap-2 rounded-md bg-geekMiddle p-2">
          {appliedFilters.map((element, index) => (
            <FilterTag filter={element} key={index} title="industry" />
          ))}
        </div>

        <Stock />
        <Button type="submit" styling="full">
          Submit
        </Button>
      </Form>
    </aside>
  );
}

export default Filters;
