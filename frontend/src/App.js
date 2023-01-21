import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { ResultsPage } from './Pages/ResultsPage/ResultsPage';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
          <Route path="/restaurants" element={<ResultsPage />} />
          {/*<Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
