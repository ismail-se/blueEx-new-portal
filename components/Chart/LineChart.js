import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data2 = [
  {
    name: "Page A",
    Shipments: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Shipments: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Shipments: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Shipments: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Shipments: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Shipments: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Shipments: 4300,
    amt: 2100,
  },
];

export default function Example({ elements }) {
  // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ResponsiveContainer width="100%" height="100%">
      {elements !== [] && (
        <LineChart
          width={500}
          height={300}
          data={elements}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Shipments"
            stroke="#82ca9d"
            // activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      )}
    </ResponsiveContainer>
  );
}
