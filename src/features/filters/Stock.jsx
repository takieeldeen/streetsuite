import { Form } from "react-router-dom";
import Button from "../../ui/Button";
import SearchForm from "../alerts/SearchForm";
import FilterBtn from "./FilterBtn";
import Options from "./Options";
import TextOptions from "./TextOptions";

const data_filters = {
  title: "Industry",
  name: "industry",
  filters: [
    { name: "Health Care", icon: "healthcare", value: "healthcare" },
    { name: "IT", icon: "it", value: "it" },
    { name: "Materials", icon: "materials", value: "materials" },
    { name: "Communication", icon: "communication", value: "communication" },
    { name: "Energy", icon: "energy", value: "energy" },
    { name: "Industrials", icon: "industrials", value: "industrials" },
    {
      name: "Consumer Discrationary",
      icon: "consumerdiscrationary",
      value: "consumerdiscrationary",
    },
    { name: "Utilities", icon: "utilities", value: "utilities" },
    {
      name: "Consumer Stapies",
      icon: "consumerstapies",
      value: "consumerstapies",
    },
    { name: "Financials", icon: "financials", value: "financials" },
    { name: "Real Estate", icon: "realestate", value: "realestate" },
  ],
};

function Stock() {
  return (
    <div className="mb-3 w-full rounded bg-geekMiddle px-4 py-2">
      <p className="text-sm font-bold text-white">Stock</p>
      <div className="flex flex-col gap-4 pl-2 pt-2">
        <SearchForm
          styling="dark"
          placeholder="$ TICKER"
          style={{ height: "27px", fontSize: "13px" }}
        />

        {/* Industry filters */}
        <FilterBtn filters={data_filters} />
        {/* Market Cap filters */}
        <div className="grid grid-cols-2 gap-4">
          <Options
            title="Market Cap"
            heading="marketcap"
            options={[
              {
                name: "Micro",
                value: "micro",
              },
              {
                name: "Small",
                value: "small",
              },
              {
                name: "Large",
                value: "large",
              },
            ]}
          />
          <Options
            title="Risk Level"
            heading="risklevel"
            options={[
              {
                name: "Low Risk",
                value: "lowrisk",
              },
              {
                name: "Mid Risk",
                value: "midrisk",
              },
              {
                name: "High Risk",
                value: "highrisk",
              },
            ]}
          />
          <TextOptions
            title="Strategy"
            options={[
              {
                name: "Big Option Buys",
                value: "bigoption",
              },
              {
                name: "Merger Arbitrage",
                value: "mergerarbitrage",
              },
              {
                name: "Short Reports",
                value: "shortreports",
              },
            ]}
          />
          <TextOptions
            title="Asset"
            options={[
              {
                name: "Stocks",
                value: "stocks",
              },
              {
                name: "Options",
                value: "options",
              },
              {
                name: "Futures",
                value: "futures",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
// }

export default Stock;
