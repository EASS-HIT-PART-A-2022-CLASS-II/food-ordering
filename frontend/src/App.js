import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { ResultsPage } from './Pages/ResultsPage/ResultsPage';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { getInitialData, getRestaurantsByCity, getRestaurantsByDish, getRestaurantsByType } from "src/network/requests"
import { useState, useEffect } from 'react';

function App() {
  const [initialData, setInitialData] = useState(null);
  const [searchFilter,setSearchFilter]=useState({id:0,value:0});

  const requestForInitData = async () => {
    const res = await getInitialData();
    setInitialData(res)
  }

  const requestRestaurantsByType = async (type) => {
    const res = await getRestaurantsByType(type);
  }

  const requestRestaurantsByCity = async (city) => {
    const res = await getRestaurantsByCity(city);
  }

  const requestRestaurantsByDish = async (dishName) => {
    const res = await getRestaurantsByDish(dishName);
  }

  useEffect(() => {
    requestForInitData();
  }, [])

  useEffect(() => {
    console.log(searchFilter);
    if(searchFilter.id===1)
    {
      requestRestaurantsByCity(searchFilter.value)
    }else if(searchFilter.id===2)
    {
      requestRestaurantsByType(searchFilter.value)
      
    }else if(searchFilter.id===3)
    {
      requestRestaurantsByDish(searchFilter.value)
    }
  }, [searchFilter])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage setSearchFilter={setSearchFilter} initialData={initialData} />} />
            <Route path="/restaurants" element={<ResultsPage searchResults="searchResults"/>} />
            {/*<Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
