import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AckBar } from './components/navigation/AckBar';
import { NavBar } from './components/navigation/NavBar';
import { AboutUsPage } from './components/screens/AboutUsPage';
import { ExpendituresPage } from './components/screens/ExpendituresPage';
import { FuelHelperPage } from './components/screens/FuelHelperPage';
import { NotFound } from './components/screens/NotFound';

export const App = () => {
  return (
	  <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<FuelHelperPage />} />
            <Route path="Expenditures" element={<ExpendituresPage/>} />
            <Route path="FuelHelper" element={<FuelHelperPage/>} />
            <Route path="AboutUs" element={<AboutUsPage/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </Router>
      <AckBar />
    </>
  )
}
