import { useEffect, useMemo, useState } from "react";
import TeslaTableRow from "./TeslaTableRow";
import Select from "./Select";

function formatData(items, options) {
  console.log(options);
  const obj = items.reduce((acc, curr) => {
    if (
      (!acc[curr.region] && curr.region === options.region) ||
      (!acc[curr.region] && options.region === "all")
    ) {
      //{ region: curr.region, model: "sum", sales: 0 }
      console.log("HERE");
      acc[curr.region] = [{ region: curr.region, model: "sum", sales: 0 }];
    }
    console.log(acc);
    if (
      acc[curr.region] &&
      (curr.model === options.model || options.model === "all")
    ) {
      acc[curr.region][0].sales += curr.sales;
      acc[curr.region].push(curr);
    }
    // acc[curr.region][0].sales += curr.sales;
    return acc;
  }, {});
  console.log(obj);
  return obj;
}

function TeslaTable({ data }) {
  const [region, setRegion] = useState("all");
  const [model, setModel] = useState("all");
  const [formattedData, setFormattedData] = useState([]);
  useEffect(() => {
    setFormattedData(formatData(data, { region, model }));
  }, [region, model]);

  return (
    <div>
      <Select
        label="Region Filter"
        onChange={(e) => setRegion(e.target.value)}
        value={region}
        options={["all", "US", "EU", "CA"]}
      />
      <Select
        label="Model Filter"
        onChange={(e) => setModel(e.target.value)}
        value={model}
        options={["all", "A", "B", "C", "D"]}
      />
      <table>
        <tr>
          <th>region</th>
          <th>model</th>
          <th>sales</th>
        </tr>
        {Object.keys(formattedData).map((region) =>
          formattedData[region].map((curr) => (
            <TeslaTableRow
              region={region}
              model={curr.model}
              sales={curr.sales}
            />
          ))
        )}
      </table>
    </div>
  );
}

export default TeslaTable;
