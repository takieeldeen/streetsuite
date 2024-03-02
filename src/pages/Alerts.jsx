import SearchForm from "../features/alerts/SearchForm";
import Alert from "../features/alerts/Alert";
import Button from "../ui/Button";
import SVG from "../ui/SVG";
import Filters from "../features/filters/Filters";
const data_alerts = [
  {
    stock: "AAPL",
    qty: 150,
    market: 0.1,
    risk: "High",
  },
  {
    stock: "GOOGL",
    qty: 100,
    market: 0.05,
    risk: "Low",
  },
  {
    stock: "MSFT",
    qty: 250,
    market: -0.15,
    risk: "High",
  },
  {
    stock: "FB",
    qty: 180,
    market: 0.08,
    risk: "Low",
  },
  {
    stock: "NFLX",
    qty: 120,
    market: -0.1,
    risk: "High",
  },
  {
    stock: "GOOGL",
    qty: 200,
    market: 0.12,
    risk: "High",
  },
  {
    stock: "AMZN",
    qty: 220,
    market: -0.18,
    risk: "Low",
  },
  {
    stock: "TSLA",
    qty: 130,
    market: 0.15,
    risk: "High",
  },
  {
    stock: "NVDA",
    qty: 90,
    market: 0.2,
    risk: "Low",
  },
  {
    stock: "IBM",
    qty: 110,
    market: -0.05,
    risk: "High",
  },
  {
    stock: "INTC",
    qty: 170,
    market: 0.07,
    risk: "Low",
  },
  {
    stock: "PYPL",
    qty: 200,
    market: -0.22,
    risk: "High",
  },
  {
    stock: "CSCO",
    qty: 160,
    market: 0.09,
    risk: "Low",
  },
  {
    stock: "V",
    qty: 140,
    market: -0.12,
    risk: "High",
  },
  {
    stock: "AMD",
    qty: 180,
    market: 0.18,
    risk: "Low",
  },
  {
    stock: "GS",
    qty: 80,
    market: -0.08,
    risk: "High",
  },
  {
    stock: "DIS",
    qty: 250,
    market: 0.25,
    risk: "High",
  },
  {
    stock: "VZ",
    qty: 120,
    market: -0.15,
    risk: "Low",
  },
  {
    stock: "WMT",
    qty: 300,
    market: 0.2,
    risk: "High",
  },
  {
    stock: "BA",
    qty: 70,
    market: -0.1,
    risk: "Low",
  },
];

function Alerts() {
  return (
    <div className=" relative w-full md:grid md:grid-cols-[1fr,427px] md:pr-2">
      <div className="w-full  pr-2 md:pr-8 ">
        <header className="flex w-full items-center gap-2">
          <h2 className="relative  text-[20px] font-extrabold uppercase text-white before:absolute before:-left-4 before:top-1/2 before:block before:h-[70%] before:w-[5px] before:-translate-y-1/2   before:bg-geekAccent before:content-[''] md:text-[48px]">
            Alerts
          </h2>
          <SearchForm placeholder="Search By..." />
          <Button>
            <SVG src="./bell.svg" className="h-[33px] w-[33px] bg-geekAccent" />
          </Button>
        </header>
        {/* Alerts Container */}
        <div className="flex h-[80dvh] w-full flex-col gap-3 overflow-y-scroll py-4 pr-2">
          {data_alerts.map((alert, index) => (
            <Alert key={index} alert={alert} />
          ))}
        </div>
      </div>
      <Filters />
    </div>
  );
}

export default Alerts;
