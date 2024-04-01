import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import myContext from './Contexts/MyContext';
import { useEffect } from 'react';
 const Filters =({filterName})=> {

  const {data, setData} = useContext(myContext);
  const [filter, setFilter] = useState({
    mon:'',
    revenue:'',
    profit:''
  });

  const handleChange = (event) => {
  setFilter((prev)=>({...prev,[event.target.name]:event.target.value}));
  };

  const applyFilters = () => {
    let filteredData = data.original;

    // Apply month filter
    if (filter.mon) {
      filteredData = filteredData.filter(item => item.month === filter.mon);
    }

    // Apply revenue filter
    if (filter.revenue) {
      const [minRevenue, maxRevenue] = filter.revenue.split('-').map(val => parseInt(val));
      filteredData = filteredData.filter(item => item.revenue >= minRevenue && item.revenue <= maxRevenue);
    }

    // Apply profit filter
    if (filter.profit) {
      const [minProfit, maxProfit] = filter.profit.split('-').map(val => parseInt(val));
      filteredData = filteredData.filter(item => item.profit >= minProfit && item.profit <= maxProfit);
    }

    // Update filtered data
    setData((prev)=>({...prev,specific:filteredData}));
  };

  useEffect(()=>{
    applyFilters();
  },[filter])

  return (
    <div >
      
        {filterName==='Month'&&(<><FormControl sx={{ m: 1, minWidth: 180}} ><InputLabel id="month" >Filter by {filterName}</InputLabel><Select
          labelId="month"
          id="month"
          value={filter.mon}
          name='mon'
          onChange={handleChange}
          autoWidth
          label={filterName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='January'>Jan</MenuItem>
          <MenuItem value='February'>Feb</MenuItem>
          <MenuItem value='March'>Mar</MenuItem>
          <MenuItem value='April'>Apr</MenuItem>
          <MenuItem value='May'>May</MenuItem>
          <MenuItem value='June'>Jun</MenuItem>
          <MenuItem value='July'>Jul</MenuItem>
          <MenuItem value='August'>Aug</MenuItem>
          <MenuItem value='September'>Sep</MenuItem>
          <MenuItem value='October'>Oct</MenuItem>
          <MenuItem value='November'>Nov</MenuItem>
          <MenuItem value='December'>Dec</MenuItem>
        </Select></FormControl></>)}{filterName==='Revenue'&&(<><FormControl sx={{ m: 1, minWidth: 180}} ><InputLabel id="revenue" >Filter by {filterName}</InputLabel><Select
          labelId="revenue"
          id="revenue"
          value={filter.revenue}
          onChange={handleChange}
          autoWidth
          name='revenue'
          label={filterName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='10000-12000'>10000-12000</MenuItem>
          <MenuItem value='13000-15000'>13000-15000</MenuItem>
          <MenuItem value='15000-20000'>15000-20000</MenuItem>
          <MenuItem value='Above 20000'>Above 20000</MenuItem>
          
        </Select></FormControl></>)}{filterName==='Profit'&&(<><FormControl sx={{ m: 1, minWidth: 180}} ><InputLabel id="profit" >Filter by {filterName}</InputLabel><Select
          labelId="profit"
          id="profit"
          value={filter.profit}
          onChange={handleChange}
          autoWidth
          name='profit'
          label={filterName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='5000-8000'>5000-8000</MenuItem>
          <MenuItem value='8000-10000'>8000-10000</MenuItem>
          <MenuItem value='Above 10000'>Above 10000</MenuItem>
          
        </Select></FormControl></>)}
      
    </div>
  );
}
export default Filters