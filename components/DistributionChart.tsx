import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '初始流动性池 (LP)', value: 75, fill: '#F0B90B' },
  { name: '增长储备基金', value: 25, fill: '#D97706' },
];

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const DistributionChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full bg-hex-darker/50 rounded-xl border border-hex-gold/20 p-4 shadow-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold text-center text-hex-gold mb-2">资金分配方案</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={80}
            dataKey="value"
            stroke="#1E2329"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1E2329', borderColor: '#F0B90B', color: '#F3F4F6' }}
            itemStyle={{ color: '#F0B90B' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};