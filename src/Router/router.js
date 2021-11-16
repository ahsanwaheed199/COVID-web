import DetailsPage from "../Screens/DetailsPage"
import Home from "../Screens/Home"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  import React from 'react'
  
  const Approuter = () => {
      return (
          <div>
<Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
         
    </Routes>
  </Router>
              
          </div>
      )
  }
  
  export default Approuter
  