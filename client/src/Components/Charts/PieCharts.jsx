import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import myContext from "../Contexts/MyContext";
import { Chart as ChartJS } from "chart.js/auto";

const PieCharts = () => {
  const { data } = useContext(myContext);

  // Prepare data for Chart.js
  const chartData = {
    labels: data.specific.map(item => item.month),
    datasets: [
      {
        label:"Revenue",
        data: data.specific.map(item => item.revenue),
        backgroundColor: ['#8884d8', '#82ca9d', '#ffc658', '#ff6384', '#36a2eb', '#ffce56']
      },
      {
        label:"Profit",
        data:data.specific.map(item=>item.profit),
        backgroundColor:['#8884d8', '#82ca9d', '#ffc658', '#ff6384', '#36a2eb', '#ffce56']
      }
    ]
  };

  return (
    <div className="rounded-lg w-[700px] h-[450px] shadow-lg flex flex-col items-center justify-center">
      <Pie data={chartData} />
    </div>
  );
};

export default PieCharts;
