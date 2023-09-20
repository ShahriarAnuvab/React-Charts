import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import Areachart from "./Areachart";
import Linebarchart from "./Linebarchart";
import ScatterChart from "./ScatterChart";

const Charts = () => {
  const data = [
    {
      name: "January",
      revenue: 4000,
      profit: 1000,
      customers: 250,
    },
    {
      name: "February",
      revenue: 3000,
      profit: 800,
      customers: 220,
    },
    {
      name: "March",
      revenue: 3500,
      profit: 900,
      customers: 240,
    },
  ];

  return (
    <div >
      <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        Line Chart{" "}
      </h1>
      <div>
        <ResponsiveContainer  width="100%" height={500}>
        <LineChart width={500} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            name="Profit"
          />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="#8884d8"
            name="Customers"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
      <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        Area Chart{" "}
      </h1>
        <Areachart></Areachart>
      </div>
      <div>
      <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        Line Bar Chart{" "}
      </h1>
        <Linebarchart></Linebarchart>
      </div>
      <div>
      <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        Scatter  Chart{" "}
      </h1>
        <ScatterChart></ScatterChart>
      </div>

    </div>
  );
};

export default Charts;
