import React from 'react'
import ElectronicsData from '../Json/Dummy.json'

// fetch data using manually created json file

function Axios() {

    const [data] = React.useState(ElectronicsData);
    console.log(data);
  return (
    <div>



{data.map((comm) => ( 
        <ul>
            <li>FirstName:-{comm.firstname}</li>
            <li>LastName:-{comm.lastname}</li> 
            <li>Email:-{comm.email}</li> 
        </ul>
 ))},

    </div>
  )
}

export default Axios
