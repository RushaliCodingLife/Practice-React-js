import React, { createContext, useContext } from 'react'


// Context Data

const ContextData = createContext();

export default function ComponentA() {
  return (
    <div>

        <ContextData.Provider value={"Shashank from CompA"}>

            <ComponentB/>

        </ContextData.Provider>

    </div>
  );
}


function ComponentB() {
  return (
    <div>
      <ComponentC/>
    </div>
  );
}


function ComponentC() {
  const MyName = useContext(ContextData);
return (
  <div>
    <h1 className="text-danger text-center">Hii I m Component C. I am {MyName}</h1>
  </div>
);
}
