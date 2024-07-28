import React from "react";

import { BarChart, Bar, YAxis, ResponsiveContainer } from "recharts";
const data = [
  { percent: 80 },
  { percent: 25 },
  { percent: 60 },
  { percent: 90 },
  { percent: 50 },
];

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      fontSize={12}
      dy={-6}
    >{`${value}%`}</text>
  );
};
export function Chart() {
  return (
    <ResponsiveContainer height={180}>
      <BarChart width={600} height={180} data={data}>
        <defs>
          <linearGradient id="barGradient" x1="1" y1="0" x2="1" y2="1">
            <stop offset="50%" stopColor="#20b2aa" />
            <stop offset="100%" stopColor="rgba(24, 22, 29, 1)" />
          </linearGradient>
        </defs>
        <YAxis
          domain={[0, "dataMax+10"]}
          tickCount={6}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <Bar
          dataKey="percent"
          barSize={30}
          fill="url(#barGradient)" // Using the gradient defined in <defs>
          radius={[5, 5, 5, 5]}
          label={renderCustomBarLabel}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
