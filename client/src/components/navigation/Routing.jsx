import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from '../screens/NotFound';
import { ExpendituresPage } from '../screens/ExpendituresPage';
import { FuelHelperPage } from '../screens/FuelHelperPage';
import { AboutUsPage } from '../screens/AboutUsPage';

export const Routing = () => {
  return (
    <>
      <div className='innerContainer'>
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
      </div>
    </>
  )
}
