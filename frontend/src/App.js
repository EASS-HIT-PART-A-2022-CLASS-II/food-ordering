import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { ResultsPage } from './Pages/ResultsPage/ResultsPage';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { getInitialData } from "src/network/requests"
import { useState, useEffect } from 'react';

function App() {
  const [initialData, setInitialData] = useState(null);
  const requestForInitData = async () => {
    const res = await getInitialData();
    setInitialData(res)
  }
  useEffect(() => {
    requestForInitData();
  }, [])

  // const [searchFilter,setSearchFilter]=useState({type:0,value:0});


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage initialData={initialData} />} />
            <Route path="/restaurants" element={<ResultsPage searchResults="searchResults"/>} />
            {/*<Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
