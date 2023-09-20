import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Areachart = () => {
    const data = [
        {
          name: 'January',
          visitors: 5000,
          pageViews: 15000,
        },
        {
          name: 'February',
          visitors: 5500,
          pageViews: 16000,
        },
        {
          name: 'March',
          visitors: 6000,
          pageViews: 17000,
        },
        {
          name: 'April',
          visitors: 6500,
          pageViews: 18000,
        },
        {
          name: 'May',
          visitors: 7000,
          pageViews: 19000,
        },
        {
          name: 'June',
          visitors: 7500,
          pageViews: 20000,
        },
        {
          name: 'July',
          visitors: 8000,
          pageViews: 21000,
        },
        {
          name: 'August',
          visitors: 8500,
          pageViews: 22000,
        },
        {
          name: 'September',
          visitors: 9000,
          pageViews: 23000,
        },
        {
          name: 'October',
          visitors: 9500,
          pageViews: 24000,
        },
        {
          name: 'November',
          visitors: 10000,
          pageViews: 25000,
        },
        {
          name: 'December',
          visitors: 10500,
          pageViews: 26000,
        },
      ];
      
    return (
        <div>
            <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={0.5} stopColor="green" stopOpacity={1} />
              <stop offset={0.5} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="visitors" stroke="#000" fill="url(#splitColor)" />
          <Area type="monotone" dataKey="pageViews" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
            
        </div>
    );
};

export default Areachart;