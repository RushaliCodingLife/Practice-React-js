import React, { useRef } from 'react'

function UseRef() {
const inputElement = useRef();

const focusInput = () => {
    inputElement.current.focus();
};


  return (
    <>
    <input  type = 'text'  style={{backgroundColor: "grey"}}  ref={inputElement}/>
    <button  onClick={focusInput}> Focus Input</button> 
    </>
  );
}

export default UseRef
