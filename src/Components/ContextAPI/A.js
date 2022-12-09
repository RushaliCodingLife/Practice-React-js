import React, { Component } from "react";
import B from "./B";
import myContext from "./Context";

export default class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello",
      city: "Ahmedabad",
    };
  }

  render() {
    return (
      <div>
       
                <h2>A Component</h2>

                <myContext.Provider value={this.state}>
                  <B/>
                </myContext.Provider>
             
                <button
                 
                  onClick={() => {
                    this.setState({
                      name: "Heyyy!!",
                      city: "Delhi",
                    });
                  }}
                > Update Data</button>
              </div>  
    );
  }
  
}




