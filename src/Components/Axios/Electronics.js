import React, { useState } from "react";
import ElectronicsApi from "../Json/Electronics.json";
import { Helmet } from 'react-helmet';\

// fetch data using manually created json file


function Electronics() {
  const [data] = useState(ElectronicsApi);

  return (
    <>

      <Helmet>
        <title>Axios</title>
      </Helmet>

      {data.map(() => (
        <div >
          
            </div>
            
      ))}
      </>
 
)}


export default Electronics
