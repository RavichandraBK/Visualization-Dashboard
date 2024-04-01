import React, { useContext } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, BarChart, Bar } from "recharts";
import myContext from "../Contexts/MyContext";

const BarCharts = () => {
    const {data, setData} = useContext(myContext);
    // const data = [
    //     { month: 'January', revenue: 10000, profit: 5000 },
    //     { month: 'February', revenue: 12000, profit: 6000 },
    //     { month: 'March', revenue: 15000, profit: 7500 },
    //     { month: 'April', revenue: 13000, profit: 6500 },
    //     { month: 'May', revenue: 14000, profit: 7000 },
    //     { month: 'June', revenue: 16000, profit: 8000 },
    //     { month: 'July', revenue: 17000, profit: 8500 },
    //     { month: 'August', revenue: 18000, profit: 9000 },
    //     { month: 'September', revenue: 20000, profit: 10000 },
    //     { month: 'October', revenue: 21000, profit: 10500 },
    //     { month: 'November', revenue: 22000, profit: 11000 },
    //     { month: 'December', revenue: 25000, profit: 12500 },
    //     { month: 'January', revenue: 11000, profit: 5500 },
    //     { month: 'February', revenue: 13000, profit: 6500 },
    //     { month: 'March', revenue: 16000, profit: 8000 },
    //     { month: 'April', revenue: 14000, profit: 7000 },
    //     { month: 'May', revenue: 15000, profit: 7500 },
    //     { month: 'June', revenue: 17000, profit: 8500 },
    //     { month: 'July', revenue: 18000, profit: 9000 },
    //     { month: 'August', revenue: 19000, profit: 9500 },
    //     { month: 'September', revenue: 21000, profit: 10500 },
    //     { month: 'October', revenue: 22000, profit: 11000 },
    //     { month: 'November', revenue: 23000, profit: 11500 },
    //     { month: 'December', revenue: 26000, profit: 13000 },
    //     // Add more data as needed...
    //   ];
  return (
    <>
      <div className="rounded-lg w-[700px] h-[450px] shadow-lg flex flex-col items-center justify-center">
        <BarChart width={600} height={400} data={data.specific}>
          <XAxis dataKey="month" />
          <YAxis />
          {/* <CartesianGrid stroke="#eee" strokeDasharray="5"/> */}
          <Bar  dataKey="revenue" fill="#8884d8" />
          <Bar  dataKey="profit" fill="#82ca9d" />
          <Legend />
        </BarChart>
      </div>
    </>
  );
};

export default BarCharts;
