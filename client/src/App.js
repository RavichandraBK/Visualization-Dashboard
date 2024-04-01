import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import MiniDrawer from "./Components/MiniDrawer";
import myContext from "./Components/Contexts/MyContext";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "./Components/LoginPage";

function App() {
  const [data, setData] = useState({original:[
    { month: 'January', revenue: 10000, profit: 5000 },
    { month: 'February', revenue: 12000, profit: 6000 },
    { month: 'March', revenue: 15000, profit: 7500 },
    { month: 'April', revenue: 13000, profit: 6500 },
    { month: 'May', revenue: 14000, profit: 7000 },
    { month: 'June', revenue: 16000, profit: 8000 },
    { month: 'July', revenue: 17000, profit: 8500 },
    { month: 'August', revenue: 18000, profit: 9000 },
    { month: 'September', revenue: 20000, profit: 10000 },
    { month: 'October', revenue: 21000, profit: 10500 },
    { month: 'November', revenue: 22000, profit: 11000 },
    { month: 'December', revenue: 25000, profit: 12500 },
    { month: 'January', revenue: 11000, profit: 5500 },
    { month: 'February', revenue: 13000, profit: 6500 },
    { month: 'March', revenue: 16000, profit: 8000 },
    { month: 'April', revenue: 14000, profit: 7000 },
    { month: 'May', revenue: 15000, profit: 7500 },
    { month: 'June', revenue: 17000, profit: 8500 },
    { month: 'July', revenue: 18000, profit: 9000 },
    { month: 'August', revenue: 19000, profit: 9500 },
    { month: 'September', revenue: 21000, profit: 10500 },
    { month: 'October', revenue: 22000, profit: 11000 },
    { month: 'November', revenue: 23000, profit: 11500 },
    { month: 'December', revenue: 26000, profit: 13000 },
  ],
specific:[]});
  return (
    <myContext.Provider value={{data,setData}}>
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/" element={<LoginPage/>}/> */}
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
      {/* </Routes> */}
      <Dashboard/>
     
    </div>
    </myContext.Provider>
  );
}

export default App;
